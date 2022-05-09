import React from "react";

import "./style.css"

const TagsItem = (props) => {

	let { name, id } = props.tag;
	let { tagClickHandler, isActive } = props;

	isActive = isActive ? 'active' : '';

	return (
		<li className={`tags-item ${isActive}`} data-id={id} onClick={() => typeof tagClickHandler === 'function' ? tagClickHandler(id) : ''}>
			{name}
		</li>
	);
}

export default TagsItem;