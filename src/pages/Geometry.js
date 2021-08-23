import React, { Fragment } from "react";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton } from "../components/Hero";
import { Main, MainContainer, Topics, TopicsButton, TopicsContent } from "../components/Main";
import AcuteTriangles from "../components/geometry/triangles/Acutangle";
import ObliqueTriangle from "../components/geometry/triangles/Oblique";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1";

export default function Geometry({ topic }) {
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitleContainer>
						<HeroTitle>Geometría</HeroTitle>
						<HeroButton href="#inicio">¡Empezar Ahora!</HeroButton>
					</HeroTitleContainer>
				</HeroContainer>
			</Hero>
			<Main>
				<MainContainer>
					<Topics>
						<TopicsButton id="inicio" onClick={showTopicsNav}>
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
						{topic === "acuted triangle" && <AcuteTriangles />}
						{topic === "oblique triangle" && <ObliqueTriangle />}
						{topic === "square" && (
							<p style={{ color: "white", fontSize: "5rem", textAlign: "center" }}>Cuadrado</p>
						)}
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
	const menu = document.getElementById("inicio");
	const topics = document.getElementById("topics__mobile__geometry");

	const displayNormalTopicsMobileNav = () => {
		topics.style.display = "flex";
		main.removeEventListener("transitionstart", displayNormalTopicsMobileNav);
	};

	const displayNoneTopicsMobileNav = () => {
		topics.style.display = "none";
		main.removeEventListener("transitionend", displayNoneTopicsMobileNav);
	};

	const hideTopicsMobileNav = () => {
		if (main.classList.contains("show_topics_nav")) {
			main.addEventListener("transitionend", displayNoneTopicsMobileNav);
			main.classList.remove("show_topics_nav");
			menu.style.pointerEvents = "all";
			main.style.cursor = "default";
			main.removeEventListener("click", hideTopicsMobileNav);
		}
	};

	if (!main.classList.contains("show_topics_nav")) {
		main.classList.add("show_topics_nav");
		menu.style.pointerEvents = "none";
		main.style.cursor = "pointer";

		main.addEventListener("transitionstart", displayNormalTopicsMobileNav);
		main.addEventListener("click", hideTopicsMobileNav);
	}
};
