import React, { useState, useEffect } from "react";

import Logo from "../assets/svg/react.svg";
import Menu from "../assets/svg/menu.svg";

import "./styles/Header.css";

export default function Header() {
	// Header color
	const [headerBackgroundColor, setHeaderBackgroundColor] = useState("rgba(0, 0, 0, 0.5)");
	const clientHeight = document.documentElement.clientHeight;

	useEffect(() => {
		const main = document.getElementById("main");

		main.addEventListener("scroll", () => {
			const mainScroll = main.scrollTop;

			if (mainScroll > clientHeight) {
				setHeaderBackgroundColor("rgba(0, 0, 0, 1)");
			} else {
				setHeaderBackgroundColor("rgba(0, 0, 0, 0.5)");
			}
		});

		document.getElementById("header").style.backgroundColor = headerBackgroundColor;

		// Cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
		window.addEventListener("beforeunload", () => {
			main.removeEventListener("scroll", () => {});
		});
	}, [clientHeight, headerBackgroundColor]);

	return (
		<header id="header" className="header">
			<div className="header__nav">
				<img className="header__nav--logo" src={Logo} alt="Logo" />
				<ul className="header__nav--list">
					<img id="menu" src={Menu} alt="Menu Icon" onClick={toogleMobileNav} />
				</ul>
			</div>
		</header>
	);
}

// React change color of header when user scroll
// https://stackoverflow.com/questions/41006169/react-change-color-of-header-when-user-scroll

window.addEventListener("scroll", () => {
	const header = document.getElementById("header");
	const windowHeight = window.screen.height;
	const scrollTop = window.scrollY;
	const headerBackground = scrollTop > windowHeight ? "black" : "transparent";
	header.style.background = headerBackground;
});

const toogleMobileNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("menu");
	const aside = document.getElementById("aside__mobile");

	const displayNormalMobileNav = () => {
		aside.style.display = "flex";
		main.removeEventListener("transitionend", displayNormalMobileNav);
	};

	const displayNoneMobileNav = () => {
		aside.style.display = "none";
		main.removeEventListener("transitionstart", displayNoneMobileNav);
	};

	const hideMobileNav = () => {
		if (main.classList.contains("show_mobile_nav")) {
			main.addEventListener("transitionstart", displayNoneMobileNav);
			main.classList.remove("show_mobile_nav");
			menu.style.pointerEvents = "all";
			main.style.cursor = "default";
			main.removeEventListener("click", hideMobileNav);
		}
	};

	if (!main.classList.contains("show_mobile_nav")) {
		main.classList.add("show_mobile_nav");
		menu.style.pointerEvents = "none";
		main.style.cursor = "pointer";

		main.addEventListener("transitionend", displayNormalMobileNav);
		main.addEventListener("click", hideMobileNav);
	}
};
