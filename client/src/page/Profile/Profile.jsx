import React, {Component} from "react";
import UserApi from "../../Api/UserApi";

import "./style.css";
import Button from "../../componets/Button";
import {Link} from "react-router-dom";

import deleteAva from "./img/delete.svg";
import Context from "../../Context";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.avaInput = React.createRef();
        this.fileReader = new FileReader();

        this.state = {};
    }

    changeCardLink = () => {
        return (
            <div className="line">
                <div className="field card">
                    <span>Карточка</span>
                    <span className="change-card field-form">
                        <Link to="/profile/card">Редактировать</Link>
                    </span>
                </div>

                <div className="field card">
                    <Button click={this.save} text="Сохранить"/>
                </div>
            </div>
        );
    }

    changeRole = role => {
        this.setState({roleId: role, isMentor: role === 2})
    }

    save = async () => {
        console.log('asdasd');
        const formData = new FormData();

        formData.append('id', this.state.id);
        formData.append('name', this.state.name);
        if (this.state.password)
            formData.append('password', this.state.password);
        formData.append('email', this.state.email);
        formData.append('roleId', this.state.roleId);
        formData.append('gender', this.state.gender);

        if (this.avaInput.current.files[0])
            formData.append('ava', this.avaInput.current.files[0])

        const status = await UserApi.update(formData);
    }

    input = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    }

    showAva() {
        return (<img src={this.state.ava} alt=""/>);
    }

    showAvaDelete() {
        return (
            <div className="delete" onClick={() => this.setState({ava: ''})}>
                <svg className="profileIcon">
                    <use xlinkHref={`${deleteAva}#delete`}></use>
                </svg>
            </div>
        );
    }

    inputAvaHandler = e => {

        this.fileReader.addEventListener("load", () => {
            this.setState({ava: this.fileReader.result});
        }, false);

        this.fileReader.readAsDataURL(this.avaInput.current.files[0]);

        this.setState({ava: this.avaInput.current.files[0]});
    }

    changeAva = () => {
        const avaInput = document.getElementById('avaInput');

        avaInput.click();
    }

    render() {
        if (!this.state.id) {
            UserApi.getUser().then(data => {
                if (data) {
                    const user = data.user;
                    user.isMentor = user.roleId === 2;
                    user.originPassword = user.password;
                    user.password = '';
                    user.ava = process.env.REACT_APP_API_URL + "/static/" + user.ava;
                    this.setState(user);
                }
            });
        }

        const {user} = this.context;

        return (
            <div className="profile-page">
                <div className="container">
                    <div className="title">
                        <h1>Аккаунт</h1>
                        <div className="account-type">
                            <span className={!this.state.isMentor ? 'active' : ''} onClick={() => this.changeRole(1)}>
                                Пользователь
                            </span>
                            <span className={this.state.isMentor ? 'active' : ''} onClick={() => this.changeRole(2)}>
                                Ментор
                            </span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ava" onClick={this.changeAva}>
                            <input type="file" id="avaInput" ref={this.avaInput} onChange={this.inputAvaHandler}/>
                            {this.state.ava && this.showAva()}
                            {this.state.ava && this.showAvaDelete()}
                        </div>

                        <div className="profile-data">
                            <div className="line">
                                <div className="field">
                                    <label className="name">
                                        <span>Имя</span>
                                        <input className="field-form" type="text" name="name" value={this.state.name}
                                               onInput={this.input}/>
                                    </label>
                                </div>

                                <div className="field">
                                    <span>Пол</span>
                                    <label className="gender field-form">
                                        <span className={this.state.gender === "Женский" ? 'active' : ''} onClick={() => this.setState({gender: 'Женский'})}>
                                            Женский
                                        </span>
                                        <span className={this.state.gender === "Мужской" ? 'active' : ''} onClick={() => this.setState({gender: 'Мужской'})}>
                                            Мужской
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="line">
                                <div className="field">
                                    <label className="email">
                                        <span>Email</span>
                                        <input className="field-form" name="email" type="email" value={this.state.email}
                                               onInput={this.input}/>
                                    </label>

                                </div>
                                <div className="field">
                                    <label className="password">
                                        <span>Пароль</span>
                                        <input className="field-form" name="password" type="password"
                                               value={this.changePassword} onInput={this.input}/>
                                    </label>
                                </div>
                            </div>

                            {this.changeCardLink()}

                            <div className="line save logout">
                                <Button text="Выйти" className="logout" click={() => user.logout()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Profile.contextType = Context

export default Profile;