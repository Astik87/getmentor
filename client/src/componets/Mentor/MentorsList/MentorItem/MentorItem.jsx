import React from "react";

import "./style.css";

import ratingIcon from "../../MentorSort/img/ratingIcon.svg"
import vector from "./img/vector.svg";

let echoTags = (tags) => {
	let res = [];

	tags.forEach((e, i) => {
		res.push(<li key={i}>{e.name}</li>);
	});

	return res;
}

let MenuItem = (props) => {
	let { name, price, ava, experience, tags, post, rating } = props;
	return (
		<a href="#" className="mentor-item">
			<div className="vector">
				<svg>
					<use xlinkHref={`${vector}#vector`}> </use>
				</svg>
			</div>
			<div className="ava">
				<img src={process.env.REACT_APP_API_URL + "/static/"+ava} alt="" />
				<div className="rating">
					<span>{rating}</span>
					<svg width="20" height="20" className="rating-icon">
						<use width="20" height="20" xlinkHref={`${ratingIcon}#rating`}> </use>
					</svg>
				</div>
			</div>
			<div className="desc">
				<div className="name">{name}</div>
				<div className="post">{post}</div>
				<div className="price">Сумма: {price} р/час</div>
				<div className="experience">Опыт: {experience} лет</div>
				<ul className="tags">
					{echoTags(tags)}
				</ul>
			</div>
		</a>
	);
}

export default MenuItem;