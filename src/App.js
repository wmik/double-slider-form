import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-20%);
`;

const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
`;

function Header({ as = "h1", children }) {
  const StyledHeader = styled(as)`
    font-weight: bold;
    margin: 0;
  `;
  return <StyledHeader>{children}</StyledHeader>;
}

const Text = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  ${props =>
    props.ghost &&
    `background-color: transparent;
    border-color: #ffffff;`}
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <OverlayContainer>
        <Overlay>
          <OverlayLeft>
            <Header>Welcome back</Header>
            <Text>
              To keep connected with us please login with your personal info
            </Text>
            <Button>Sign In</Button>
          </OverlayLeft>
          <OverlayRight>
            <Header>Hello, Friend!</Header>
            <Text>Enter your personal details and start journey with us</Text>
            <Button ghost>Sign Up</Button>
          </OverlayRight>
        </Overlay>
      </OverlayContainer>
    </React.Fragment>
  );
}

export default App;
