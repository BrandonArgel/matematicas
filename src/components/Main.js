import styled from "styled-components";

const Main = ({ children }) => {
	return <MainContainer id="main">{children}</MainContainer>;
};

export default Main;

const MainContainer = styled.main`
	min-height: calc(100vh - 72px);
	padding: 20px;
	margin-top: 72px;
`;
