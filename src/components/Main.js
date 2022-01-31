import styled from "styled-components";

const Main = ({ children }) => {
  return <MainContainer id="main">{children}</MainContainer>;
};

export default Main;

const MainContainer = styled.main`
  padding: 20px 20px 70px 20px;
  margin-top: 72px;
  min-height: calc(100vh - 72px);
`;
