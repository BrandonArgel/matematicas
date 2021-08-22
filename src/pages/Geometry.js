import React, { Fragment } from "react";
import Header from "../components/Header";
import { Hero, HeroContainer, HeroTitle } from "../components/Hero";

const backgroundImg =
	"https://firebasestorage.googleapis.com/v0/b/personal-project-brandon.appspot.com/o/img%2Fgeometry.jpg?alt=media&token=45c78daa-1b0a-4aaf-ab0e-f43c9f81a1a1";

export default function Home() {
	return (
		<Fragment>
			<Header />
			<Hero>
				<HeroContainer backgroundImg={backgroundImg}>
					<HeroTitle>Geometría</HeroTitle>
				</HeroContainer>
			</Hero>
		</Fragment>
	);
}
