import React from "react";

import logo from '../Header/img/logo.png';

import "./style.css";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer">
					<div className="item logo">
						<img src={logo} alt="" />
					</div>
					<div className="item">
						<div className="title">Меню</div>
						<ul className="menu">
							<li><a href="#">Найти Ментора</a></li>
							<li><a href="#">Стать Ментором</a></li>
						</ul>
					</div>
					<div className="item">
						<div className="title">Прочее</div>
						<ul className="menu">
							<li><a href="#">Политика конфиденциальности</a></li>
							<li><a href="#">Условия использования</a></li>
						</ul>
					</div>
					<div className="item">
						<div className="title">Помощь</div>
						<ul className="menu">
							<li><a href="#">Служба поддержки</a></li>
							<li><a href="#">Справка</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;