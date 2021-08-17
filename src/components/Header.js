import React from "react";
import Logo from "../assets/svg/react.svg";
import { Link } from "react-router-dom";

import "./styles/Header.css";

export default function Header() {
	window.onload = () => {
		const details = document.querySelectorAll("details");
		console.log(details);
		details.forEach((detail) => {
			detail.addEventListener("mouseenter", () => {
				detail.setAttribute("open", "open");
			});
			detail.addEventListener("mouseleave", () => {
				detail.removeAttribute("open", "open");
			});
		});
	};

	return (
		<header className="header">
			<nav className="header__nav">
				<Link to="/">
					<img className="header__nav--logo" src={Logo} alt="Logo" />
				</Link>
				<ul className="header__nav--list">
					{/* <li>
						<Link>Aritmética</Link>
                        <ul>

                        </ul>
					</li> */}
					<li>
						<details>
							<summary>Geometría</summary>
							<ul>
								<li>
									<Link>Cuadrado</Link>
								</li>
								<li>
									<details>
										<summary>
											<Link>Triángulos</Link>
										</summary>
										<ul>
											<li>
												<Link>Equilatero</Link>
											</li>
											<li>
												<Link>Isósceles</Link>
											</li>
											<li>
												<Link>Escaleno</Link>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<Link>Rectángulo</Link>
								</li>
								<li>
									<Link>Trapecio</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to="/statistics">Probabilidad y Estadística</Link>
					</li>
					<li>
						<Link to="/algebra">Álgebra</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
