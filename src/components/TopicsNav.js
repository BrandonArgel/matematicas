import React from "react";
import { Link } from "react-router-dom";

import Close from "../assets/svg/close.svg";

import "./styles/TopicsNav.css";

export default function TopicsNav({ topic, children }) {
	return (
		<aside id="topics__mobile" className="topics__mobile">
			<img id="close_menu_topics" src={Close} alt="Close Icon" onClick={closeTopicsNav} />
			<nav>
				<ul>
					<li>
						<Link to="/" onClick={closeTopicsNav}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/" onClick={closeTopicsNav}>
							Geometría
						</Link>
					</li>
					<li>
						<Link to="/" onClick={closeTopicsNav}>
							Probabilidad y Estadística
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

const closeTopicsNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("start");
	const topics = document.getElementById("topics__mobile");

	const displayNoneTopicsMobileNav = () => {
		topics.style.display = "none";
		main.removeEventListener("transitionend", displayNoneTopicsMobileNav);
	};

	if (main.classList.contains("show_topics_nav")) {
		main.addEventListener("transitionend", displayNoneTopicsMobileNav);
		main.classList.remove("show_topics_nav");
		menu.style.pointerEvents = "all";
		main.style.cursor = "default";
	}
};
