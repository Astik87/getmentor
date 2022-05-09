import React, {useContext} from "react";

import logo from '../Header/img/logo.png';

import "./style.css";
import {Link} from "react-router-dom";
import Context from "../../Context";

const Footer = () => {

	const {user} = useContext(Context)

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
							<li><Link to="#mentors">Найти Ментора</Link></li>
							<li><Link to={user.isAuth ? '/profile' : '/register'}>Стать Ментором</Link></li>
						</ul>
					</div>
					<div className="item">
						<div className="title">Прочее</div>
						<ul className="menu">
							<li><Link to="/privacy-policy">Политика конфиденциальности</Link></li>
							<li><Link to="/terms-of-use">Условия использования</Link></li>
						</ul>
					</div>
					<div className="item">
						<div className="title">Помощь</div>
						<ul className="menu">
							<li><a href="#">Служба поддержки</a></li>
							<li><Link to="/info">Справка</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;