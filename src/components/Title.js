import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
	return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
	font: bold clamp(2rem, 6vw, 3rem) var(--font-roboto);
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

export default Title;
