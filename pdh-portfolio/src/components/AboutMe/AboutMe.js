import React from 'react';
import styled from 'styled-components';
import AboutMeContents from './AboutMeContents';

const AboutMeGlobalStyle = styled.div`
  h1 {
    font-size: 4rem;
    color: white;
    font-weight: 900;
    padding-left: 25%;
  }
  p {
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .number {
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AboutMe() {
  return (
    <AboutMeGlobalStyle id="about">
      <h1>
        I<span className="dash">'</span> M<br />
        A FRONT - END <br />
        DEVELOPER<span className="dash">.</span>
      </h1>
      <p>
        <span className="number">01</span>ABOUT ME
      </p>
      <AboutMeBlock>
        <AboutMeContents />
      </AboutMeBlock>
    </AboutMeGlobalStyle>
  );
}

export default AboutMe;
