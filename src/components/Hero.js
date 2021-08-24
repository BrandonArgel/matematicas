import React from "react";
import styled from "styled-components";
import "./styles/Hero.css";

const Hero = ({ children }) => {
	return (
		<HeroContainer id="hero" className="section__hero--container">
			{children}
		</HeroContainer>
	);
};

const HeroContainer = styled.section`
	background: ${(props) =>
		props.backgroundImg ? `url(${props.backgroundImg}) no-repeat fixed top` : "rgba(0, 0, 0, 1)"};
	background-size: cover;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	position: absolute;
	top: 0;
`;

const HeroTitleContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

const HeroTitle = styled.h1`
	font: bold clamp(3rem, 7vw, 10rem) var(--font-roboto);
	filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 1));
	background: linear-gradient(
			90deg,
			var(--light-blue) 15%,
			var(--blue) 30%,
			var(--purple) 45%,
			var(--pink) 60%,
			var(--purple) 65%,
			var(--blue) 80%,
			var(--light-blue) 95%
		)
		0%/1000%;
	padding: 0 20px;
	text-decoration: none;
	transition: all 0.2s;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	width: 100%;
	text-align: center;
	animation: 10s linear 0s infinite gradient;
`;

const HeroButton = styled.a`
	background: var(--light-blue);
	border-radius: 10px;
	color: black;
	cursor: pointer;
	font: bold clamp(2rem, 3vw, 4rem) var(--font-roboto);
	margin-top: 10px;
	padding: 10px 20px;
	text-decoration: none;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	transition: all 0.2s;

	&:hover {
		transform: scale(1.1);
	}
`;

export { Hero, HeroContainer, HeroTitleContainer, HeroTitle, HeroButton };
