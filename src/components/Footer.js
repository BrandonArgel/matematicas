import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterText href="https://brandonargel.me/">© Construido por Brandon Argel.</FooterText>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	align-items: center;
	bottom: 0;
	color: var(--light-text);
	display: flex;
	justify-content: center;
	font: bold 1.6rem var(--font);
	height: 50px;
	text-align: center;
	padding: 20px 10px;
	pointer-events: none;
	position: absolute;
	width: 100%;
`;

const FooterText = styled.a`
	color: var(--light-text);
	text-decoration: none;
	transition: color 0.3s ease-in-out;
	pointer-events: all;

	&:hover {
		color: var(--special-text);
	}
`;
