import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton } from "../components/Hero";
// import { Main, MainContainer, Topics, TopicsButton, TopicsContent } from "../components/Main";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fstatistics.jpg?alt=media&token=1dcf5ae0-2349-4f1a-8e08-fccae51784eb";

export default function Home() {
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitleContainer>
						<HeroTitle>Probabilidad y Estadística</HeroTitle>
						<HeroButton as={HashLink} to="#inicio" replace>
							¡Empezar Ahora!
						</HeroButton>
					</HeroTitleContainer>
				</HeroContainer>
			</Hero>
			{/* <Main>
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
						<TopicsContent></TopicsContent>
					</Topics>
				</MainContainer>
			</Main> */}
		</Fragment>
	);
}

// const showTopicsNav = () => {
// 	const main = document.getElementById("main");
// 	const menu = document.getElementById("start");
// 	const topics = document.getElementById("topics__mobile");

// 	const displayNormalTopicsMobileNav = () => {
// 		topics.style.display = "flex";
// 		main.removeEventListener("transitionstart", displayNormalTopicsMobileNav);
// 	};

// 	const displayNoneTopicsMobileNav = () => {
// 		topics.style.display = "none";
// 		main.removeEventListener("transitionend", displayNoneTopicsMobileNav);
// 	};

// 	const hideTopicsMobileNav = () => {
// 		if (main.classList.contains("show_topics_nav")) {
// 			main.addEventListener("transitionend", displayNoneTopicsMobileNav);
// 			main.classList.remove("show_topics_nav");
// 			menu.style.pointerEvents = "all";
// 			main.style.cursor = "default";
// 			main.removeEventListener("click", hideTopicsMobileNav);
// 		}
// 	};

// 	if (!main.classList.contains("show_topics_nav")) {
// 		main.classList.add("show_topics_nav");
// 		menu.style.pointerEvents = "none";
// 		main.style.cursor = "pointer";

// 		main.addEventListener("transitionstart", displayNormalTopicsMobileNav);
// 		main.addEventListener("click", hideTopicsMobileNav);
// 	}
// };
