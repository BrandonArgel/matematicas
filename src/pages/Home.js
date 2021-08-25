import React, { Fragment } from "react";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton } from "../components/Hero";
// import { Main, MainContainer, Topics, TopicsButton, TopicsContent } from "../components/Main";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fpolygons.jpg?alt=media&token=92cdb672-bf79-4a9a-ad11-bf7895b1a699";

export default function Home() {
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	link.href = "/matematicas/react.svg";

	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitleContainer>
						<HeroTitle>Home</HeroTitle>
						<HeroButton as="a" href="#inicio" replace>
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
					</Topics>
					<TopicsContent></TopicsContent>
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
