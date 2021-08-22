import React, { Fragment } from "react";
import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitle } from "../components/Hero";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fstatistics.jpg?alt=media&token=1dcf5ae0-2349-4f1a-8e08-fccae51784eb";

export default function Home() {
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitle>Probabilidad y Estadística</HeroTitle>
				</HeroContainer>
			</Hero>
		</Fragment>
	);
}
