import React from "react";

import Close from "../../assets/svg/close.svg";

import "../styles/TopicsNav.css";

export default function TopicsNav({ topic, topicChange }) {
	console.log(topic);
	console.log(topicChange);
	return (
		<aside id="topics__mobile__geometry" className="topics__mobile">
			<img id="close_menu_topics" src={Close} alt="Close Icon" onClick={closeTopicsNav} />
			<nav>
				<ul>
					<li>
						<details open className="triangle__details">
							<summary>Triángulos</summary>
							<ul>
								<details open>
									<summary>Acutángulos</summary>
									<li>
										<a
											href="#acutangulo_triangulo_equilatero"
											onClick={() => {
												closeTopicsNav();
												topicChange("acuted triangle");
											}}
										>
											Equilátero
										</a>
									</li>
									<li>
										<a
											href="#acutangulo_triangulo_escaleno"
											onClick={() => {
												closeTopicsNav();
												topicChange("acuted triangle");
											}}
										>
											Escaleno
										</a>
									</li>
									<li>
										<a
											href="#acutangulo_triangulo_isosceles"
											onClick={() => {
												closeTopicsNav();
												topicChange("acuted triangle");
											}}
										>
											Isósceles
										</a>
									</li>
								</details>
								<details open>
									<summary>Obtusángulo</summary>
									<li>
										<a
											href="#obtusangulo_triangulo_rectangulo"
											onClick={() => {
												closeTopicsNav();
												topicChange("oblique triangle");
											}}
										>
											Rectángulo
										</a>
									</li>
								</details>
								<li>
									<a
										href="#obtusangulo_triangulo_escaleno"
										onClick={() => {
											closeTopicsNav();
											topicChange("acuted triangle");
										}}
									>
										Escaleno
									</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a
							href="#cuadrado"
							onClick={() => {
								closeTopicsNav();
								topicChange("square");
							}}
						>
							Cuadrado
						</a>
					</li>
					<li>
						<a
							href="#rectangulo"
							onClick={() => {
								closeTopicsNav();
								topicChange("rectangle");
							}}
						>
							Rectángulo
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

const closeTopicsNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("inicio");
	const topics = document.getElementById("topics__mobile__geometry");

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
