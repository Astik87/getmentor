import React from "react";

import "./style.css"

const MenuItem = (props) => {
	let { link, text } = props;

	return (
		<li className="menu-item">
			<a href={link}>{text}</a>
		</li>
	);
}

export default MenuItem;