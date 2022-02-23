import React, { Component } from "react";

import MentorSearch from "./MentorSearch";
import MentorSort from "./MentorSort";
import MentorsList from "./MentorsList";

import "./style.css"

class Mentor extends Component {

	constructor(props) {
		super(props);

		this.tags = {
			1: 'Developments',
			2: 'Management',
			3: 'DevOps',
			4: 'HR',
			5: 'Marketing',
			6: 'QA',
			7: 'Data Science',
			8: 'Design',
			9: 'Аналитика',
			10: '3D',
			11: 'Python',
			12: 'Marketing',
			13: 'QA',
			14: 'Data Science',
			15: 'Design',
			16: 'Аналитика',
			17: '3D',
			18: 'Python'
		};
	}

	getTagName = (id) => {
		return this.tags[id];
	}

	render() {
		return (
			<div className="mentor">
				<div className="container">
					<h2 className="title">Выберите интересующую тебя тему </h2>

					<MentorSearch />
					<div className="line"></div>
					<MentorSort />
					<MentorsList getTagName={this.getTagName} />
				</div>
			</div>
		);
	}
}

export default Mentor;