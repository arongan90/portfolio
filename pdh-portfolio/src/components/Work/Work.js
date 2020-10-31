import React from 'react';
import { createGlobalStyle } from 'styled-components';
import WorkPage1 from './WorkPage1';
import WorkPage2 from './WorkPage2';
import WorkPage3 from './WorkPage3';
import WorkPage4 from './WorkPage4';
import WorkPage5 from './WorkPage5';

const GlobalStyle = createGlobalStyle`
  body {
    background: #717a88;
    font-family: nanum-gothic;
    width: 100%;
    margin: 0;
  }
`;

function Work() {
  return (
    <>
      <GlobalStyle />
      <WorkPage1 />
      <WorkPage2 />
      <WorkPage3 />
      <WorkPage4 />
      <WorkPage5 />
    </>
  );
}

export default Work;
