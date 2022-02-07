import React from "react";

import MenuList from "./MenuList"

import "./style.css"
import profile from "./img/profile.svg"
import vector from "./img/vector.svg"

const Menu = () => {

	let menuList = [
		{
			link: '/',
			text: 'Найти ментора'
		},
		{
			link: '/',
			text: 'Стать ментором'
		},
		{
			link: '/',
			text: 'Помощь'
		}
	];

	return (
		<div className="menu">
			<MenuList menuList={menuList} />
			<div className="profile">
				<svg className="profileIcon">
					<use xlinkHref={`${profile}#profile`}> </use>
				</svg>
				<svg className="vector">
					<use xlinkHref={`${vector}#vector`}> </use>
				</svg>
			</div>
		</div>
	);
}

export default Menu;