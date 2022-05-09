import React, { Component } from "react";

import "./style.css"
import ratingIcon from "./img/ratingIcon.svg"
import priceIcon from "./img/priceIcon.svg"
import vector from "./img/vector.svg"

class MentorSort extends Component {

	constructor(props) {
		super(props);

		this.state = { rating: 'desc', price: 'asc' };
	}

	handleClickSort = (e) => {
		if (e == 'off') {
			this.setState({ rating: 'desc', price: 'asc' });
		} else {
			this.setState({
				[e]: this.state[e] == 'asc' ? "desc" : 'asc'
			});
		}

		this.props.setSort(this.state);
	}

	render() {

		let { rating, price } = this.state;

		return (
			<div className="mentor-sort">
				<div className={`rating ${rating}`} onClick={() => this.handleClickSort('rating')}>
					<svg className="rating-icon">
						<use xlinkHref={`${ratingIcon}#rating`}> </use>
					</svg>
					<svg className="vector">
						<use xlinkHref={`${vector}#vector`}> </use>
					</svg>
				</div>
				<div className={`price ${price}`} onClick={() => this.handleClickSort('price')}>
					<svg className="price-icon">
						<use xlinkHref={`${priceIcon}#price`}> </use>
					</svg>
					<svg className="vector">
						<use xlinkHref={`${vector}#vector`}> </use>
					</svg>
				</div>
				<div className="off" onClick={() => this.handleClickSort('off')}>
					<span>
						X
					</span>
				</div>
			</div>
		);
	}
}

export default MentorSort;