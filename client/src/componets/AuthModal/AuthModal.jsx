import React, {Component} from "react";

import Button from "../Button";
import Input from "../Input";
import UserApi from "../../Api/UserApi";
import Context from "../../Context";

import './style.css';

class AuthModal extends Component {
    constructor(props) {
        super(props);

        this.state = {login: false, password: false};
    }

    auth = async () => {
        const {user} = this.context;

        if (user.isAuth) return;

        const token = await UserApi.login(this.state.loginVal, this.state.passwordVal);

        localStorage.setItem('token', token);
        user.setIsAuth(true);
    }

    valid = (e, isValid) => {
        const {id, value} = e.target;

        this.setState({[id]: isValid, [id+'Val']: value, isValid: this.state.login && this.state.password});
    }

    render() {
        return (
            <div className={"auth-modal " + this.props.className}>
                <div className="title">
                    Вход
                </div>
                <label className={"auth-field " + (this.state.login ? '' : 'error')}>
                    <span>Электронная почта</span>
                    <Input type="email" id="login" callback={this.valid} min="3"/>
                </label>
                <label className={"auth-field " + (this.state.password ? '' : 'error')}>
                    <span>Пароль</span>
                    <Input type="password" id="password" callback={this.valid} min="6"/>
                </label>
                <a href='/' className="change-password">Восстановить пароль</a>
                <div className="auth-modal__bottom">
                    <a href="/register" className="register">Создать аккаунт</a>
                    <Button text="Войти" className="auth-btn" click={this.auth} />
                </div>
                <span className="error all-error"></span>
            </div>
        );
    }
}

AuthModal.contextType = Context;

export default AuthModal;