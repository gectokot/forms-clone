import React from "react";
import Form from "./components/Form";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 500px;
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
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Form />
    </Container>
  );
}

export default App;
