import React, { Component } from "react";

import MenuList from "./MenuList"

import "./style.css"
import profile from "./img/profile.svg"
import vector from "./img/vector.svg"

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = { menuIcon: '' }
	}

	menuIconClick = () => {
		let { menuIcon } = this.state;
		if (!menuIcon)
			this.setState({ menuIcon: 'active' });
		else
			this.setState({ menuIcon: '' });
	}

	render() {
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
			<div className={`menu ${this.state.menuIcon}`} >
				<MenuList menuList={menuList} />
				<div className="profile">
					<svg className="profileIcon">
						<use xlinkHref={`${profile}#profile`}> </use>
					</svg>
					<svg className="vector">
						<use xlinkHref={`${vector}#vector`}> </use>
					</svg>
				</div>
				<div className={`menu-icon ${this.state.menuIcon}`} onClick={this.menuIconClick}>
					<span></span>
				</div>
			</div>
		);
	}
}

export default Menu;