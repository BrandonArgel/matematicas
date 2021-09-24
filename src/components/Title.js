import React from "react";
import styled from "styled-components";

const Title = ({ children }) => <Titulo>{children}</Titulo>;

const Titulo = styled.h1`
	color: var(--light-text);
	font: clamp(3rem, 4vw, 4rem) / 100% var(--font);
	margin-bottom: 20px;
	text-align: center;
`;

export default Title;
