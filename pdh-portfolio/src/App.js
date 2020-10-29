import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Work from './components/WorkPage/Work';
import Scroll from './components/Scroll';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: nanum-gothic;
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <Career />
      <Contact />
      <Scroll showBelow={250} />
      <Work />
    </>
  );
}

export default App;
