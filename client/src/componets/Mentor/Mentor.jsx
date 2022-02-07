import React, { Component } from "react";

import MentorSearch from "./MentorSearch";

import "./style.css"

class Mentor extends Component {
	render() {
		return (
			<div className="mentor">
				<div className="container">
					<h2 className="title">Выберите интересующую тебя тему </h2>

					<MentorSearch />
				</div>
			</div>
		);
	}
}

export default Mentor;