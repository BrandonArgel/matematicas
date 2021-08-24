import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton } from "../components/Hero";
import { Main, MainContainer, Topics, TopicsButton, TopicsContent } from "../components/Main";
import TrianglesSides from "../components/geometry/triangles/Sides";
import TrianglesAngles from "../components/geometry/triangles/Angle";
import Square from "../components/geometry/square/square";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1";

export default function Geometry({ topic }) {
	window.onload = () => {
		document.addEventListener("scroll", scrollHandler);
	};

	const scrollHandler = () => {
		const hero = document.getElementById("hero");
		let currentScroll = window.pageYOffset;
		let heroHeight = hero.offsetHeight;
		let header = document.getElementById("header");
		if (currentScroll > heroHeight) {
			console.log("scrolling");
			header.style.backgroundColor = "red";
		} else {
			console.log("scrolling");
			header.style.backgroundColor = "transparent";
		}
	};
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitleContainer>
						<HeroTitle>Geometría</HeroTitle>
						<HeroButton as={HashLink} to="#inicio" replace>
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
						{topic === "triangles sides" && <TrianglesSides />}
						{topic === "triangles angles" && <TrianglesAngles />}
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
