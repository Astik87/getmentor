import React, { Component } from "react";

import Button from "../../Button"
import TagsList from "../TagsList";

import "./style.css"
import searchIcon from "./img/searchIcon.svg"

class MentorSearch extends Component {
	render() {
		return (
			<div className="mentor-search">
				<div className="search-input">
					<svg className="search-icon">
						<use xlinkHref={`${searchIcon}#searchIcon`}> </use>
					</svg>
					<input type="text" />
					<Button text="Найти" link="/" className="search-btn" />
				</div>
				<TagsList />
			</div>
		);
	}
}

export default MentorSearch;