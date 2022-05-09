import React, { Component } from "react";

import MentorItem from "./MentorItem";
import Button from "../../Button";

import "./style.css";
import UserApi from "../../../Api/UserApi";

class MentorsList extends Component {

	constructor(props) {
		super(props);

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

			let matchesTheFilter = [];

			if (this.props.filter.tags && this.props.filter.tags.length !== 0) {

				matchesTheFilter = item.tags.filter(tag => {
					return this.props.filter.tags.indexOf(tag.id) !== -1;
				});

				if (matchesTheFilter.length === 0) {
					continue;
				}

			}

			if (this.props.filter.name && this.props.filter.name !== '' && !item.name.includes(this.props.filter.name)) {

				continue;

			}

			res.push(<MentorItem key={index} id={item.id} name={item.name} price={item.price} experience={item.experience} post={item.post} tags={item.tags} rating={item.ratingVal} ava={item.ava} />);
		}

		return res;

	}

	sort() {
		const sortMentors = this.state.items.sort((a, b) => {

			const priceMod = this.props.sort.price === 'asc' ? 1 : -1;
			const ratingMod = this.props.sort.rating === 'asc' ? -1 : 1;

			if(a.price !== b.price) {
				return (a.price - b.price) * priceMod;
			}

			if(a.price === b.price) {
				return (a.ratingVal - b.ratingVal) * ratingMod;
			}
		});
	}

	render() {

		// console.log(this.props)
		if(this.props.sort) {
			this.sort();
		}

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