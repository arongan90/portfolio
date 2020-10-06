import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #717a88;
    font-family: nanum-gothic;
    width: 100%;
    height: 1000px;
  }
h1 {
  font-size: 4rem;
  color: white;
  font-weight: 800;
  padding-left: 25%;
}

h2 {
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
}

span {
  color: #959daa;
  margin-right: 15px;
}

.dash {
  color: #61d25b;
}
`;

const AboutMeBlock = styled.div`
  width: 1000px;
  height: 500px;
  background: #353b4e;
  margin: 0 auto;
  margin-top: 40px;
`;

function AboutMe() {
  return (
    <>
      <GlobalStyle />
      <h1>
        I<span className="dash">'</span> M<br />
        A FRONT - END <br />
        DEVELOPER.
      </h1>
      <h2>
        <span>01</span>ABOUT ME
      </h2>
      <AboutMeBlock></AboutMeBlock>
    </>
  );
}

export default AboutMe;
