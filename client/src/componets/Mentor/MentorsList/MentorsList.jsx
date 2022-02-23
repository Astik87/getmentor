import React, { Component } from "react";

import MentorItem from "./MentorItem";
import Button from "../../Button";

import "./style.css";

class MentorsList extends Component {

	constructor(props) {
		super(props);

		this.getTagName = props.getTagName;

		this.state = {
			limit: 12,
			page: 1,
			tagIds: [],
			items: [
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3, 13, 12, 5, 11, 9, 7, 6, 8, 4],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},
				{
					name: 'Георгий Де-Броль',
					post: 'Должность @компания',
					price: 1000,
					experience: 10,
					ava: 'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg',
					tagIds: [1, 2, 3],
					rating: 5
				},

			]
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
			let tags = [];
			item.tagIds.forEach((id) => { tags.push(this.getTagName(id)) });
			res.push(<MentorItem key={index} name={item.name} price={item.price} experience={item.experience} post={item.post} tags={tags} rating={item.rating} ava={item.ava} />);
		}

		return res;

	}

	render() {
		return (
			<div className="container">
				<div className="mentors-list-wrap">
					<div className="mentors-list">
						{this.echoMentorsList()}
					</div>

					<Button text="Показать ещё" click={this.handleShowMore} className={`show-more ${this.state.end ? 'dis' : ''}`} />
				</div>
			</div>
		);
	}
}

export default MentorsList;