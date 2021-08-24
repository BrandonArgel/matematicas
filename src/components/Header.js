import React, { useState, useEffect } from "react";

import Logo from "../assets/svg/react.svg";
import Menu from "../assets/svg/menu.svg";

import "./styles/Header.css";

export default function Header() {
	const [page, setPage] = useState(window.location.pathname.substr(1));

	useEffect(() => {
		setPage(window.location.pathname.substr(1));

		document.title = page ? `${page.charAt(0).toUpperCase()}${page.slice(1)}` : "Home";
		document
			.querySelector("meta[name='description']")
			.setAttribute(
				"content",
				page
					? `Fórmulas matemáticas de ${page.charAt(0).toUpperCase()}${page.slice(1)}`
					: "Fórmulas matemáticas"
			);

		document.querySelector("link[rel~='icon']").href = page ? `/${page}.svg` : "/react.svg";
	}, [page]);

	return (
		<header id="header" className="header">
			<div className="header__blur"></div>
			<nav className="header__nav">
				<img className="header__nav--logo" src={Logo} alt="Logo" />
				<ul className="header__nav--list">
					<img id="menu" src={Menu} alt="Menu Icon" onClick={toogleMobileNav} />
				</ul>
			</nav>
		</header>
	);
}

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
