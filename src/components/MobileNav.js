import React from "react";
import { Link } from "react-router-dom";

import Close from "../assets/svg/close.svg";

import "./styles/MobileNav.css";

export default function MobileNav() {
	return (
		<aside id="aside__mobile" className="aside__mobile">
			<img id="close_menu" src={Close} alt="Close Icon" onClick={closeMobileNav} />
			<nav>
				<ul>
					<li>
						<Link onClick={closeMobileNav} to="/">
							Home
						</Link>
					</li>
					{/* <li>
						<Link to="/arithmetic">Aritmética</Link>
                        <ul>

                        </ul>
					</li> */}
					<li>
						<Link onClick={closeMobileNav} to="/geometria">
							Geometría
						</Link>
					</li>
					<li>
						<Link onClick={closeMobileNav} to="/estadistica">
							Probabilidad y Estadística
						</Link>
					</li>
					{/* <li>
					<Link onClick={closeMobileNav} to="/algebra">
						Álgebra
					</Link>
				</li> */}
					{/* <li>
						<Link>Otros</Link>
                        <ul>
							
                        </ul>
					</li> */}
				</ul>
			</nav>
		</aside>
	);
}

const closeMobileNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("menu");
	const aside = document.getElementById("aside__mobile");

	const displayNoneMobileNav = () => {
		aside.style.display = "none";
		main.removeEventListener("transitionend", displayNoneMobileNav);
	};

	if (main.classList.contains("show_mobile_nav")) {
		main.addEventListener("transitionend", displayNoneMobileNav);
		main.classList.remove("show_mobile_nav");
		menu.style.pointerEvents = "all";
		main.style.cursor = "default";
	}
};
