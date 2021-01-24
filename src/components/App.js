import React from "react";
import List from "./List";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-top: 25%;
  width: 400px;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    background: #F1F2B5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #135058, #F1F2B5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #135058, #F1F2B5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <List />
    </Wrapper>
  );
}

export default App;
