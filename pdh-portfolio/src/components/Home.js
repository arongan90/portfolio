import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Career from './Career/Career';
import Contact from './Contact/Contact';
import ScrollToTop from './Button/ScrollToTop';

function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <Career />
      <Contact />
      <ScrollToTop showBelow={250} />
    </>
  );
}

export default Home;
