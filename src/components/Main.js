import React from "react";
import styled from "styled-components";

function Main({ children }) {
	return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
	width: 100%;
	height: 100vh;
	background: #00f;
`;

const Aside = styled.aside`
	background: #fff;
	width: 20%;
	height: inherit;
`;

export { Main, MainContainer, Aside };
