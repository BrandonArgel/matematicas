import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
	return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
	color: white;
	font: bold clamp(2rem, 6vw, 3rem) / 3.5rem var(--font-roboto);
	padding: 10px 20px;
	position: relative;
	margin: 0 auto;
	width: fit-content;

	&::before {
		content: "";
		border-top: 8px solid var(--light-blue);
		border-left: 8px solid var(--light-blue);
		border-radius: 10px 7px 0 7px;
		height: 50px;
		left: -8px;
		position: absolute;
		top: -8px;
		width: 50px;
	}

	&::after {
		position: absolute;
		border-top: 8px solid var(--light-blue);
		border-right: 8px solid var(--light-blue);
		border-radius: 7px 10px 7px 0;
		content: "";
		right: -8px;
		top: -8px;
		width: 50px;
		height: 50px;
	}
`;

export default Title;
