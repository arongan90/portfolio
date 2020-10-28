import React from 'react';
import { createGlobalStyle } from 'styled-components';
import WorkPage1 from './Component/WorkPage1';
import WorkPage2 from './Component/WorkPage2';
import WorkPage3 from './Component/WorkPage3';
import WorkPage4 from './Component/WorkPage4';

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
    </>
  );
}

export default Work;
