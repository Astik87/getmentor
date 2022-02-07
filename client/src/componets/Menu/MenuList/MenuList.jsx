import React from "react";

import MenuItem from "../MenuItem";

import "./style.css"

const MenuList = (props) => {

	let { menuList } = props;

	return (
		<ul className="menu-list">
			{
				menuList.map((element, index) =>
					<MenuItem key={index} link={element.link} text={element.text} />
				)
			}
		</ul>
	);
}

export default MenuList;