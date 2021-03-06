import React, { Component } from "react";

import Button from "../../Button"
import TagsList from "../TagsList";

import "./style.css"
import searchIcon from "./img/searchIcon.svg"

class MentorSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {searchValue: ''}
	}

	input = (e) => {
		const {value} = e.target;

		this.props.searchInputHandler(value.trim());
		this.setState({searchValue: value});
	}

	render() {
		return (
			<div className="mentor-search">
				<div className="search-input">
					<svg className="search-icon">
						<use xlinkHref={`${searchIcon}#searchIcon`}> </use>
					</svg>
					<input type="text" value={this.state.searchValue} onInput={this.input} />
					<Button text="Найти" link="/" className="search-btn" />
				</div>
				<TagsList activeTags={this.props.activeTags} tagClickHandler={this.props.tagClickHandler} />
			</div>
		);
	}
}

export default MentorSearch;