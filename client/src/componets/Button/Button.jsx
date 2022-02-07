import React from "react";

import "./style.css"

const Button = (props) => {
	let { link, text, className, click } = props;
	return (
		<a href={link} className={`btn ${className || ''}`} onClick={click || null}>{text}</a>
	);
}

export default Button;