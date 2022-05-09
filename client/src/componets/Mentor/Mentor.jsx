import React, { Component } from "react";

import MentorSearch from "./MentorSearch";
import MentorSort from "./MentorSort";
import MentorsList from "./MentorsList";

import "./style.css"

class Mentor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mentorsFilter: false,
			sort: false
		};
	}

	tagClickHandler = (id) => {
		let {mentorsFilter} = this.state;

		if (mentorsFilter && mentorsFilter.tags.length > 0) {
			const tagIndex = mentorsFilter.tags.indexOf(id);
			if (tagIndex === -1) {
				mentorsFilter.tags.push(id);
			} else {
				mentorsFilter.tags.splice(tagIndex, 1);
			}
		} else {
			mentorsFilter = {};
			mentorsFilter.tags = [id]
		}

		this.setState({mentorsFilter})
	}

	searchInputHandler = (name) => {

		let {mentorsFilter} = this.state;

		if (!mentorsFilter)
			mentorsFilter = {name}
		else
			mentorsFilter.name = name;

		this.setState({mentorsFilter});

	}

	setSort = (sort) => {
		this.setState({sort});
	}

	render() {
		return (
			<div className="mentor" id="mentors">
				<div className="container">
					<h2 className="title">Выберите интересующую тебя тему </h2>

					<MentorSearch tagClickHandler={this.tagClickHandler} searchInputHandler={this.searchInputHandler} activeTags={this.state.mentorsFilter.tags} />
					<div className="line"></div>
					<MentorSort setSort={this.setSort} />
					<MentorsList sort={this.state.sort} filter={this.state.mentorsFilter} />
				</div>
			</div>
		);
	}
}

export default Mentor;