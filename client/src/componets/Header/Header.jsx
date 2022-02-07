import React from "react";

import Menu from "../Menu";

import "./style.css"
import logo from "./img/logo.png"

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<Menu />
				</div>
			</div>
		</header>
	);
}

export default Header;