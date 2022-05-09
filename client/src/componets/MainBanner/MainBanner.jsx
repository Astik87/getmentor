import React from "react";

import Button from "../Button"

import "./style.css"
import bannerBg from "./img/bannerBg.png"

const MainBanner = () => {
	return (
		<div className="main-banner">

			<div className="container">
				<div className="banner-wrap">
					<div className="banner-bg">
						<img src={bannerBg} alt="" />
					</div>

					<div className="content">
						<div className="text">
							<h1>ПОМОЖЕМ ДОБИТЬСЯ ЦЕЛИ</h1>
							<span>Найди своего ментора </span>
						</div>
						<Button link="#mentors" text="Найти ментора" className="banner-btn" />
					</div>
				</div>
			</div>

		</div>
	);
}

export default MainBanner;