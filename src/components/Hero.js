import React from "react";
import styled from "styled-components";
import "./styles/Hero.css";

const Hero = ({ children }) => {
	return <HeroContainer className="section__hero--container">{children}</HeroContainer>;
};

const HeroContainer = styled.section`
	background: ${(props) =>
		props.backgroundImg ? `url(${props.backgroundImg}) no-repeat fixed top` : "rgba(0, 0, 0, 1)"};
	background-size: cover;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeroTitle = styled.h1`
	font: bold clamp(3rem, 7vw, 15rem) var(--font-roboto);
	filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 1));
	background: linear-gradient(
			90deg,
			rgba(22, 255, 226, 1) 15%,
			rgba(2, 159, 252, 1) 30%,
			rgba(153, 52, 244, 1) 45%,
			rgba(253, 0, 253, 1) 60%,
			rgba(153, 52, 244, 1) 65%,
			rgba(2, 159, 252, 1) 80%,
			rgba(22, 255, 226, 1) 95%
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

export { Hero, HeroContainer, HeroTitle };
