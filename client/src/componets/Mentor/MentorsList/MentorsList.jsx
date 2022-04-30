import React, { Component } from "react";

import MentorItem from "./MentorItem";
import Button from "../../Button";

import "./style.css";
import UserApi from "../../../Api/UserApi";

class MentorsList extends Component {

	constructor(props) {
		super(props);

		this.getTagName = props.getTagName;

		this.state = {
			limit: 12,
			page: 1,
			tagIds: [],
			items: null
		};

	}

	handleShowMore = () => {
		let { limit, page } = this.state;
		page++;
		if (limit * page > this.state.items.length) {
			this.setState({ end: true, page: page });
		} else {
			this.setState({ page: page });
		}
	}

	echoMentorsList = () => {
		let res = [];

		let { limit, page } = this.state;

		limit *= page;

		if (limit > this.state.items.length)
			limit = this.state.items.length;

		for (let index = 0; index < limit; index++) {
			let item = this.state.items[index];
			res.push(<MentorItem key={index} name={item.name} price={item.price} experience={item.experience} post={item.post} tags={item.tags} rating={item.ratingVal} ava={item.ava} />);
		}

		return res;

	}

	render() {

		if(this.state.items == null) {
			UserApi.getByFilter({roleId: 2}, true).then(res => {
				this.setState({items: res.data});
			})

			return (<div>Загрузка...</div>);
		}

		return (
			<div className="container">
				<div className="mentors-list-wrap">
					<div className="mentors-list">
						{this.echoMentorsList()}
					</div>

					{this.state.items.length > this.state.limit && <Button text="Показать ещё" click={this.handleShowMore} className={`show-more ${this.state.end ? 'dis' : ''}`} />}
				</div>
			</div>
		);
	}
}

export default MentorsList;