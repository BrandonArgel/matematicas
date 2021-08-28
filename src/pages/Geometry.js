import React, { Fragment } from "react";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton } from "../components/Hero";
import { Main, MainContainer, Topics, TopicsButton, TopicsContent } from "../components/Main";

import WhatIsGeometry from "../components/geometry/WhatIsGeometry";
import Equilateral from "../components/geometry/figures/Equilateral";
// import Isosceles from "../components/geometry/figures/Isosceles";
// import Scalene from "../components/geometry/figures/Scalene";
import Square from "../components/geometry/figures/Square";
// import Rectangle from "../components/geometry/figures/Rectangle";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1";

export default function Geometry({ topic }) {
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	link.href = "/matematicas/geometria.svg";
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitleContainer>
						<HeroTitle>Geometría</HeroTitle>
						<HeroButton as="a" href="#inicio" replace>
							¡Empezar Ahora!
						</HeroButton>
					</HeroTitleContainer>
				</HeroContainer>
			</Hero>
			<Main>
				<MainContainer>
					<Topics>
						<TopicsButton id="button" onClick={showTopicsNav}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Ver los temas
						</TopicsButton>
					</Topics>
					<TopicsContent>
						{topic === "what_is_geometry" && <WhatIsGeometry />}
						{topic === "equilateral_triangle" && <Equilateral />}
						{/* {topic === "isosceles" && <Isosceles />}
						{topic === "scalene" && <Scalene />} */}
						{topic === "square" && <Square />}
						{topic === "rectangle" && (
							<p style={{ color: "white", fontSize: "5rem", textAlign: "center" }}>Rectángulo</p>
						)}
					</TopicsContent>
				</MainContainer>
			</Main>
		</Fragment>
	);
}

const showTopicsNav = () => {
	const main = document.getElementById("main");
	const menu = document.getElementById("button");
	const topics = document.getElementById("topics__mobile__geometry");

	const displayNormalTopicsMobileNav = () => {
		topics.style.display = "flex";
		main.removeEventListener("transitionend", displayNormalTopicsMobileNav);
	};

	const displayNoneTopicsMobileNav = () => {
		topics.style.display = "none";
		main.removeEventListener("transitionstart", displayNoneTopicsMobileNav);
	};

	const hideTopicsMobileNav = () => {
		if (main.classList.contains("show_topics_nav")) {
			main.addEventListener("transitionstart", displayNoneTopicsMobileNav);
			main.classList.remove("show_topics_nav");
			menu.style.pointerEvents = "all";
			main.style.direction = "ltr";
			main.style.cursor = "default";
			main.removeEventListener("click", hideTopicsMobileNav);
		}
	};

	if (!main.classList.contains("show_topics_nav")) {
		main.classList.add("show_topics_nav");
		menu.style.pointerEvents = "none";
		main.style.direction = "rtl";
		main.style.cursor = "pointer";

		main.addEventListener("transitionend", displayNormalTopicsMobileNav);
		main.addEventListener("click", hideTopicsMobileNav);
	}
};
