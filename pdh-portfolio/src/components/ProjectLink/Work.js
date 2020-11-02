import React from 'react';
import WorkPage1 from './WorkPage1';
import WorkPage2 from './WorkPage2';
import WorkPage3 from './WorkPage3';
import WorkPage4 from './WorkPage4';
import WorkPage5 from './WorkPage5';
import HomeButton from '../Button/HomeButton';
import ScrollToTop from '../Button/ScrollToTop';

function Work() {
  return (
    <>
      <WorkPage1 />
      <WorkPage2 />
      <WorkPage3 />
      <WorkPage4 />
      <WorkPage5 />
      <HomeButton />
      <ScrollToTop />
    </>
  );
}

export default Work;
