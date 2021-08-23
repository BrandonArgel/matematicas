import React from "react";
import styled from "styled-components";

const Main = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.main`
	margin-top: calc(100vh - 80px);
	min-height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.8);
`;

const Topics = styled.div`
	align-items: center;
	display: flex;
	height: 80px;
	justify-content: center;
	pointer-events: none;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1;
`;

const TopicsButton = styled.a`
	background: black;
	color: var(--light-blue);
	cursor: pointer;
	font: bold clamp(1.8rem, 3vw, 2rem) / 4rem var(--font-roboto);
	height: 50px;
	pointer-events: all;
	padding: 5px 10px;
	position: relative;
	overflow: hidden;

	& span:nth-child(1) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to right, black, var(--light-blue));
	}

	&:hover span:nth-child(1) {
		animation: animate1 2s linear infinite;
	}

	@keyframes animate1 {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}

	& span:nth-child(2) {
		position: absolute;
		top: 0;
		right: 0;
		width: 2px;
		height: 100%;
		transform: translateY(-100%);
		background: linear-gradient(to bottom, black, var(--light-blue));
	}

	&:hover span:nth-child(2) {
		animation: animate2 2s 1s linear infinite;
	}

	@keyframes animate2 {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(100%);
		}
	}

	& span:nth-child(3) {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to left, black, var(--light-blue));
	}

	&:hover span:nth-child(3) {
		animation: animate3 2s linear infinite;
	}

	@keyframes animate3 {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	& span:nth-child(4) {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 100%;
		transform: translateY(100%);
		background: linear-gradient(to top, black, var(--light-blue));
	}

	&:hover span:nth-child(4) {
		animation: animate4 2s 1s linear infinite;
	}

	@keyframes animate4 {
		0% {
			transform: translateY(100%);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	& span:nth-child(5) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		transform: translateX(-100%);
		background: linear-gradient(to right, black, var(--light-blue));
	}

	&:hover span:nth-child(5) {
		animation: animate5 2s 1s linear infinite;
	}

	@keyframes animate5 {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}

	& span:nth-child(6) {
		position: absolute;
		top: 0;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, black, var(--light-blue));
	}

	&:hover span:nth-child(6) {
		animation: animate6 2s linear infinite;
	}

	@keyframes animate6 {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(100%);
		}
	}

	& span:nth-child(7) {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		transform: translateX(100%);
		background: linear-gradient(to left, black, var(--light-blue));
	}

	&:hover span:nth-child(7) {
		animation: animate7 2s 1s linear infinite;
	}

	@keyframes animate7 {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	& span:nth-child(8) {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to top, black, var(--light-blue));
	}

	&:hover span:nth-child(8) {
		animation: animate8 2s linear infinite;
	}

	@keyframes animate8 {
		0% {
			transform: translateY(100%);
		}

		100% {
			transform: translateY(-100%);
		}
	}
`;

const TopicsContent = styled.div`
	margin: 20px;
`;

export { Main, MainContainer, Topics, TopicsButton, TopicsContent };
