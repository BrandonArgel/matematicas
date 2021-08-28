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
						<a href="#que_es" onClick={() => topicChange("what_is_geometry")}>
							¿Qué es la geometría?
						</a>
					</li>
					<li>
						<a href="#tipos" onClick={() => topicChange("geometry_types")}>
							Tipos de geometría
						</a>
					</li>
					<li>
						<details>
							<summary>Figuras geométricas</summary>
							<details className="triangle__details">
								<summary>Triángulos</summary>
								<ul>
									<details>
										<summary>Según sus lados</summary>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("equilateral_triangle");
												}}
												replace
												href="#triangulo_equilatero"
											>
												Equilátero
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("scalene_triangle");
												}}
												replace
												href="#triangulo_escaleno"
											>
												Escaleno
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("isosceles_triangle");
												}}
												replace
												href="#triangulo_isosceles"
											>
												Isósceles
											</a>
										</li>
									</details>
									<details>
										<summary>Según sus ángulos</summary>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("acute_triangle");
												}}
												replace
												href="#triangulo_acutangulo"
											>
												Acutángulo
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("obtuse_triangle");
												}}
												replace
												href="#triangulo_obtusangulo"
											>
												Obtusángulo
											</a>
										</li>
										<li>
											<a
												onClick={() => {
													closeTopicsNav();
													topicChange("rectangle_triangle");
												}}
												replace
												href="#triangulo_rectangulo"
											>
												Rectángulo
											</a>
										</li>
									</details>
								</ul>
							</details>
							<li>
								<a
									onClick={() => {
										closeTopicsNav();
										topicChange("square");
									}}
									replace
									href="#cuadrado"
								>
									Cuadrado
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										closeTopicsNav();
										topicChange("rectangle");
									}}
									replace
									href="#rectangulo"
								>
									Rectángulo
								</a>
							</li>
						</details>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

const closeTopicsNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("button");
	const topics = document.getElementById("topics__mobile__geometry");

	const displayNoneTopicsMobileNav = () => {
		topics.style.display = "none";
		main.removeEventListener("transitionstart", displayNoneTopicsMobileNav);
	};

	if (main.classList.contains("show_topics_nav")) {
		main.addEventListener("transitionstart", displayNoneTopicsMobileNav);
		main.classList.remove("show_topics_nav");
		menu.style.pointerEvents = "all";
		main.style.direction = "ltr";
		main.style.cursor = "default";
	}
};
