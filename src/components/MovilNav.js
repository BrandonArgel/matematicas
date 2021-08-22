import React from "react";
import { Link } from "react-router-dom";

import Close from "../assets/svg/close.svg";

import "./styles/MovilNav.css";

export default function MovilNav() {
	return (
		<aside className="aside__movil">
			<img id="close_menu" src={Close} alt="Close Icon" onClick={hideMovileNav} />
			<ul>
				<li>
					<Link onClick={hideMovileNav} to="/">
						Home
					</Link>
				</li>
				{/* <li>
						<Link to="/arithmetic">Aritmética</Link>
                        <ul>

                        </ul>
					</li> */}
				<li>
					<Link onClick={hideMovileNav} to="/geometria">
						Geometría
					</Link>
				</li>
				<li>
					<Link onClick={hideMovileNav} to="/estadistica">
						Probabilidad y Estadística
					</Link>
				</li>
				{/* <li>
					<Link onClick={hideMovileNav} to="/algebra">
						Álgebra
					</Link>
				</li> */}
				{/* <li>
						<Link>Otros</Link>
                        <ul>
							
                        </ul>
					</li> */}
			</ul>
		</aside>
	);
}

const hideMovileNav = () => {
	const header = document.getElementById("header");

	header.style.width = "calc(100% - 10px)";
	document.getElementById("main").classList.toggle("show_movil_nav");
	document.getElementById("menu").style.pointerEvents = "all";
};
