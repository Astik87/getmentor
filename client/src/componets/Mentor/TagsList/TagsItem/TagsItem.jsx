import React from "react";

import "./style.css"

const TagsItem = (props) => {

	let { text } = props;

	return (
		<li className="tags-item">
			{text}
		</li>
	);
}

export default TagsItem;