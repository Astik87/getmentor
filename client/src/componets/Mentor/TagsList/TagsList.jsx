import React, { Component } from "react";

import TagsItem from "./TagsItem/TagsItem";

import "./style.css"
import vector from "./img/vector.svg"

class TagsList extends Component {

	constructor(props) {
		super(props);
		this.state = { limit: 11, showAll: false };
		this.tagsList = ['Developments', 'Management', 'DevOps', 'HR', 'Marketing', 'QA', 'Data Science', 'Design', 'Аналитика', '3D', 'Python', 'Marketing', 'QA', 'Data Science', 'Design', 'Аналитика', '3D', 'Python'];
	}

	echoTagsList() {
		let res = [];

		let { limit } = this.state;

		for (let index = 0; index < limit; index++) {
			res.push(<TagsItem key={index} text={this.tagsList[index]} />);
		}

		return res;

	}

	handleShowMore = () => {

		let { showAll } = this.state;

		if (showAll) {
			this.setState({ limit: 11, showAll: false });
		} else {
			let { length } = this.tagsList;

			this.setState({ limit: length, showAll: true });
		}
	}

	render() {
		return (
			<ul className="tags-list">
				{
					this.echoTagsList()
				}
				<li className={`tags-item show-more ${this.state.showAll ? 'active' : ''}`} onClick={this.handleShowMore}>
					Ещё
					<svg className="vector">
						<use xlinkHref={`${vector}#vector`}> </use>
					</svg>
				</li>
			</ul>
		);
	}
}

export default TagsList;