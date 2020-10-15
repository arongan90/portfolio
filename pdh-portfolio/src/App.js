import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

const GlobalStyle = createGlobalStyle`
  body {
    background: #717a88;
    font-family: nanum-gothic;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
