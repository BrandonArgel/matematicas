import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonHover = ({ children, to }) => {
	return (
		<Button to={to}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			{children}
		</Button>
	);
};

const Button = styled(Link)`
	align-items: center;
	background: transparent;
	border: none;
	outline: none;
	color: var(--special-text);
	cursor: pointer;
	display: flex;
	font: 2rem var(--font);
	margin: 0 auto;
	overflow: hidden;
	padding: 10px 20px;
	position: relative;
	text-decoration: none;
	transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
	width: fit-content;

	span:nth-child(1) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to right, transparent, var(--special-text));
	}
	span:nth-child(2) {
		position: absolute;
		top: 0;
		right: 0;
		width: 2px;
		height: 100%;
		transform: translateY(-100%);
		background: linear-gradient(to bottom, transparent, var(--special-text));
	}
	span:nth-child(3) {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(to left, transparent, var(--special-text));
	}
	span:nth-child(4) {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 100%;
		transform: translateY(100%);
		background: linear-gradient(to top, transparent, var(--special-text));
	}
	span:nth-child(5) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		transform: translateX(-100%);
		background: linear-gradient(to right, transparent, var(--special-text));
	}
	span:nth-child(6) {
		position: absolute;
		top: 0;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to bottom, transparent, var(--special-text));
	}
	span:nth-child(7) {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		transform: translateX(100%);
		background: linear-gradient(to left, transparent, var(--special-text));
	}
	span:nth-child(8) {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to top, transparent, var(--special-text));
	}
	&:hover {
		transform: scale(1.1);

		span: nth-child(1) {
			animation: animate1 2s linear infinite;
		}
		span: nth-child(2) {
			animation: animate2 2s 1s linear infinite;
		}
		span: nth-child(3) {
			animation: animate3 2s linear infinite;
		}
		span: nth-child(4) {
			animation: animate4 2s 1s linear infinite;
		}
		span: nth-child(5) {
			animation: animate5 2s 1s linear infinite;
		}
		span: nth-child(6) {
			animation: animate6 2s linear infinite;
		}
		span: nth-child(7) {
			animation: animate7 2s 1s linear infinite;
		}
		span: nth-child(8) {
			animation: animate8 2s linear infinite;
		}
	}
	&:focus {
		transform: scale(1.1);

		span: nth-child(1) {
			animation: animate1 2s linear infinite;
		}
		span: nth-child(2) {
			animation: animate2 2s 1s linear infinite;
		}
		span: nth-child(3) {
			animation: animate3 2s linear infinite;
		}
		span: nth-child(4) {
			animation: animate4 2s 1s linear infinite;
		}
		span: nth-child(5) {
			animation: animate5 2s 1s linear infinite;
		}
		span: nth-child(6) {
			animation: animate6 2s linear infinite;
		}
		span: nth-child(7) {
			animation: animate7 2s 1s linear infinite;
		}
		span: nth-child(8) {
			animation: animate8 2s linear infinite;
		}
	}
	&:active {
		transform: scale(1.1);

		span: nth-child(1) {
			animation: animate1 2s linear infinite;
		}
		span: nth-child(2) {
			animation: animate2 2s 1s linear infinite;
		}
		span: nth-child(3) {
			animation: animate3 2s linear infinite;
		}
		span: nth-child(4) {
			animation: animate4 2s 1s linear infinite;
		}
		span: nth-child(5) {
			animation: animate5 2s 1s linear infinite;
		}
		span: nth-child(6) {
			animation: animate6 2s linear infinite;
		}
		span: nth-child(7) {
			animation: animate7 2s 1s linear infinite;
		}
		span: nth-child(8) {
			animation: animate8 2s linear infinite;
		}
	}
	@keyframes animate1 {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	@keyframes animate2 {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}
	@keyframes animate3 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@keyframes animate4 {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@keyframes animate5 {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	@keyframes animate6 {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}
	@keyframes animate7 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
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

// Export both components
export { ButtonHover, Button };
