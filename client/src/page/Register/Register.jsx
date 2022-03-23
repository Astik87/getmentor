import React from "react";
import { Link } from 'react-router-dom';

import Button from "../../componets/Button";

import "./style.css";
import bg from './img/bg.jpg';
import logo from './img/logo.png';

const Register = () => {
	return (
		<div className="reg-wrap">
			<div className="reg-wrap__bg">
				<img src={bg} alt="" />
			</div>

			<div className="content">
				<div className="logo">
					<img src={logo} alt="" />
				</div>

				<form action="/" className="form">
					<h1 className="heading">
						Создать учётную запись
					</h1>
					<div className="desc">У вас уже есть учётная запись? <Link to="/auth">Войти</Link></div>
					<label className="field">
						<span>Адрес электронной почты</span>
						<input type="text" />
					</label>

					<div className="tow">
						<label className="field">
							<span>Имя</span>
							<input type="text" />
						</label>
						<label className="field">
							<span>Фамилия</span>
							<input type="text" />
						</label>
					</div>

					<label className="field">
						<span>Пароль</span>
						<input type="text" />
					</label>

					<label className="radio">
						<span>Пол</span>
						<label>
							<span>
								<input type="radio" name="gender" />
								Мужской
							</span>
						</label>

						<label>
							<span>
								<input type="radio" name="gender" />
								Женский
							</span>
						</label>
					</label>

					<hr />

					<label className="checkbox">
						<span>Я хочу стать ментором</span>
						<input type="checkbox" />
					</label>

					<label className="checkbox">
						<span>Соглашаюсь с политикой сайта</span>
						<input type="checkbox" />
					</label>

					<Button text="Создать учетную запись" />
				</form>
			</div>
		</div>
	);
}

export default Register;