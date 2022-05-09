import React, {Component} from "react";
import { Link } from "react-router-dom";

import AuthModal from "../AuthModal";
import MenuList from "./MenuList"
import Context from "../../Context";
import {observable, observe} from "mobx";

import "./style.css"
import profile from "./img/profile.svg"
import vector from "./img/vector.svg"
import {observer} from "mobx-react";

const Menu = observer(class extends Component {

	constructor(props) {
		super(props);
		this.state = { menuIcon: '', profileStatus: 0 }
	}

	menuIconClick = () => {
		let { menuIcon } = this.state;
		if (!menuIcon)
			this.setState({ menuIcon: 'active' });
		else
			this.setState({ menuIcon: '' });
	}

	linkToProfile = menuList => {
		return (
			<div className="menu">
				<MenuList menuList={menuList} />
				<Link to="/profile">
					<div className="profile">
						{this.profileIcon()}
					</div>
				</Link>
			</div>
		);
	}

	profileIcon = () => {
		return (
			<div>
				<svg className="profileIcon" onClick={() => {this.setState({profileStatus: !this.state.profileStatus})}}>
					<use xlinkHref={`${profile}#profile`}> </use>
				</svg>
				<svg className="vector" onClick={() => {this.setState({profileStatus: !this.state.profileStatus})}}>
					<use xlinkHref={`${vector}#vector`}> </use>
				</svg>
			</div>
		);
	}

	authForm = menuList => {
		return (
			<div className="menu">
				<MenuList menuList={menuList} />
				<div className="profile">
					{this.profileIcon()}
					<AuthModal className={this.state.profileStatus ? 'active' : ''}/>
				</div>
			</div>
		);
	}

	render() {
		let menuList = [
			{
				link: '#mentors',
				text: 'Найти ментора'
			},
			{
				link: '/register',
				text: 'Стать ментором'
			},
			{
				link: '#help',
				text: 'Помощь'
			}
		];

		const {user} = this.context;

		return user.isAuth ? this.linkToProfile(menuList) : this.authForm(menuList);
	}
});

Menu.contextType = Context;

export default Menu;