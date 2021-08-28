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
						<details>
							<summary>Figuras geométricas</summary>
							<details className="triangle__details">
								<summary>Triángulos</summary>
								<ul>
									<details>
										<summary>Según sus lados</summary>
										<li>
											<a
												href="#triangulo_equilatero"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles sides");
												}}
												replace
											>
												Equilátero
											</a>
										</li>
										<li>
											<a
												href="#triangulo_escaleno"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles sides");
												}}
												replace
											>
												Escaleno
											</a>
										</li>
										<li>
											<a
												href="#triangulo_isosceles"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles sides");
												}}
												replace
											>
												Isósceles
											</a>
										</li>
									</details>
									<details>
										<summary>Según sus ángulos</summary>
										<li>
											<a
												href="#triangulo_acutangulo"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles angles");
												}}
												replace
											>
												Acutángulo
											</a>
										</li>
										<li>
											<a
												href="#triangulo_obtusangulo"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles angles");
												}}
												replace
											>
												Obtusángulo
											</a>
										</li>
										<li>
											<a
												href="#triangulo_rectangulo"
												onClick={() => {
													closeTopicsNav();
													topicChange("triangles angles");
												}}
												replace
											>
												Rectángulo
											</a>
										</li>
									</details>
								</ul>
							</details>
							<li>
								<a
									href="#cuadrado"
									onClick={() => {
										closeTopicsNav();
										topicChange("square");
									}}
									replace
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
									replace
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
