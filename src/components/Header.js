import React, { useState, useEffect } from "react";
import Logo from "../assets/svg/react.svg";
import { Link } from "react-router-dom";

import Menu from "../assets/svg/menu.svg";

import "./styles/Header.css";

export default function Header() {
	const [page, setPage] = useState(window.location.pathname.substr(1));

	useEffect(() => {
		setPage(window.location.pathname.substr(1));

		if (!page) {
			document.getElementById("home").classList.add("page__active");
		} else {
			document.getElementById(`${page}`).classList.add("page__active");
		}

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
					<li id="home">
						<Link to="/">Home</Link>
					</li>
					{/* <li>
						<Link to="/arithmetic">Aritmética</Link>
                        <ul>

                        </ul>
					</li> */}
					<li id="geometria">
						<Link to="/geometria">Geometría</Link>
					</li>
					<li id="estadistica">
						<Link to="/estadistica">Probabilidad y Estadística</Link>
					</li>
					{/* <li id="algebra">
						<Link to="/algebra">Álgebra</Link>
					</li> */}
					{/* <li>
						<Link>Otros</Link>
                        <ul>
							
                        </ul>
					</li> */}
					<img id="menu" src={Menu} alt="Menu Icon" onClick={showMobilNav} />
				</ul>
			</nav>
		</header>
	);
}

const showMobilNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("menu");
	const header = document.getElementById("header");

	const hideMovilNav = () => {
		header.style.width = "calc(100% - 10px)";
		if (main.classList.contains("show_movil_nav")) {
			main.classList.remove("show_movil_nav");
			menu.style.pointerEvents = "all";
			main.removeEventListener("clicl", hideMovilNav);
		}
	};

	main.addEventListener("click", hideMovilNav);
	main.classList.add("show_movil_nav");
	menu.style.pointerEvents = "none";
	header.style.width = "100%";

	if (!main.classList.contains("show_movil_nav")) {
		menu.style.pointerEvents = "all";
	}
};
