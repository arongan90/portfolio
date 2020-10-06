import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
