import React, {Component, useContext, useState} from "react";
import {Link} from 'react-router-dom';

import Button from "../../componets/Button";

import "./style.css";
import bg from './img/bg.jpg';
import logo from './img/logo.png';
import userApi from "../../Api/UserApi";
import Context from "../../Context";
import UserApi from "../../Api/UserApi";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: {val: '', isValid: true},
            surname: {val: '', isValid: true},
            email: {val: '', isValid: true},
            password: {val: '', isValid: true},
            gender: {val: '', isValid: true},
            policy: {val: false, isValid: true},
            errors: {val: '', isValid: true},
        };
    }

    validate = () => {

        const fields = ['name', 'surname', 'email', 'password', "policy", "gender"];

        let totalValid = true,
            res = {};

        fields.forEach(fieldName => {

            let field = this.state[fieldName];
            res[fieldName] = field;

            if (!field.val) {
                res[fieldName].isValid = false;
                totalValid = false;
            } else {
                res[fieldName].isValid = true;
            }

        });

        this.setState(res);

        return totalValid;
    }

    register = () => {
        if(!this.validate())
            return;

        const {name, surname, email, password, gender} = this.state;

        userApi.register(surname.val+name.val, email.val, password.val, gender.val).then(async data => {
            if (data.error) {
                this.setState({error: data.error});
                return;
            }

            const {user} = this.context;

            const token = await UserApi.login(this.state.email.val, this.state.password.val);

            localStorage.setItem('token', token);
            user.setIsAuth(true);
        })

    }

    change = e => {
        const {value, id, checked} = e.target;

        const field = this.state[id];
        field.val = value;
        this.setState({[id]: field})
    }

    changeCheckbox = e => {
        const {id, checked} = e.target;

        const field = this.state[id];
        field.val = checked;
        this.setState({[id]: field})
    }

    render() {

        return (
            <div className="reg-wrap">
                <div className="reg-wrap__bg">
                    <img src={bg} alt=""/>
                </div>

                <div className="content">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>

                    <div className="form">
                        <h1 className="heading">
                            Создать учётную запись
                        </h1>
                        <div className="desc">У вас уже есть учётная запись? <Link to="/auth">Войти</Link></div>
                        <label className={"field " + (!this.state.email.isValid ? 'error' : '')}>
                            <span>Адрес электронной почты</span>
                            <input type="email" id="email" onInput={this.change} value={this.state.email.val}/>
                        </label>

                        <div className="tow">
                            <label className={"field " + (!this.state.name.isValid ? 'error' : '')}>
                                <span>Имя</span>
                                <input type="text" id="name" value={this.state.name.val} onInput={this.change}/>
                            </label>
                            <label className={"field " + (!this.state.surname.isValid ? 'error' : '')}>
                                <span>Фамилия</span>
                                <input type="text" id="surname" value={this.state.surname.val} onInput={this.change}/>
                            </label>
                        </div>

                        <label className={"field " + (!this.state.password.isValid ? 'error' : '')}>
                            <span>Пароль</span>
                            <input type="password" id="password" value={this.state.password.val} onInput={this.change}/>
                        </label>

                        <label className={"radio checkbox " + (!this.state.gender.isValid ? 'error' : '')}>
                            <span>Пол</span>
                            <label>
							<span>
								<input type="radio" name="gender" id="gender" value="Мужской" onChange={this.change}/>
								Мужской
							</span>
                            </label>

                            <label>
							<span>
								<input type="radio" name="gender" id="gender" value="Женский" onChange={this.change}/>
								Женский
							</span>
                            </label>
                        </label>

                        <hr/>

                        <label className={"checkbox " + (!this.state.policy.isValid ? 'error' : '')}>
                            <span>Соглашаюсь с политикой сайта</span>
                            <input type="checkbox" id="policy" onChange={this.changeCheckbox}/>
                        </label>

                        <Button text="Создать учетную запись" click={this.register}/>
                    </div>
                </div>
            </div>
        );
    }
}
Register.contextType = Context;

export default Register;