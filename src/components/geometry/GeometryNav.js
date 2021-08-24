import React from "react";
import { HashLink } from "react-router-hash-link";

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
						<details className="triangle__details">
							<summary>Triángulos</summary>
							<ul>
								<details open>
									<summary>Según sus lados</summary>
									<li>
										<HashLink
											to="#triangulo_equilatero"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles sides");
											}}
											replace
										>
											Equilátero
										</HashLink>
									</li>
									<li>
										<HashLink
											to="#triangulo_escaleno"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles sides");
											}}
											replace
										>
											Escaleno
										</HashLink>
									</li>
									<li>
										<HashLink
											to="#triangulo_isosceles"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles sides");
											}}
											replace
										>
											Isósceles
										</HashLink>
									</li>
								</details>
								<details open>
									<summary>Según sus ángulos</summary>
									<li>
										<HashLink
											to="#triangulo_acutangulo"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles angles");
											}}
											replace
										>
											Acutángulo
										</HashLink>
									</li>
									<li>
										<HashLink
											to="#triangulo_obtusangulo"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles angles");
											}}
											replace
										>
											Obtusángulo
										</HashLink>
									</li>
									<li>
										<HashLink
											to="#triangulo_rectangulo"
											onClick={() => {
												closeTopicsNav();
												topicChange("triangles angles");
											}}
											replace
										>
											Rectángulo
										</HashLink>
									</li>
								</details>
							</ul>
						</details>
					</li>
					<li>
						<HashLink
							to="#cuadrado"
							onClick={() => {
								closeTopicsNav();
								topicChange("square");
							}}
							replace
						>
							Cuadrado
						</HashLink>
					</li>
					<li>
						<HashLink
							to="#rectangulo"
							onClick={() => {
								closeTopicsNav();
								topicChange("rectangle");
							}}
							replace
						>
							Rectángulo
						</HashLink>
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
