import React from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu";

import "./style.css"
import logo from "./img/logo.png"

const Header = props => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="logo">
						<Link to="/"><img src={logo} alt="" /></Link>
					</div>
					<Menu />
				</div>
			</div>
		</header>
	);
}

export default Header;