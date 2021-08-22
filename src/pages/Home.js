import React from "react";

import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitle } from "../components/Hero";
import { Main, MainContainer, Aside } from "../components/Main";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fpolygons.jpg?alt=media&token=92cdb672-bf79-4a9a-ad11-bf7895b1a699";

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitle>Home</HeroTitle>
				</HeroContainer>
			</Hero>
			<Main>
				<MainContainer>
					<Aside>hola</Aside>
				</MainContainer>
			</Main>
		</React.Fragment>
	);
}
