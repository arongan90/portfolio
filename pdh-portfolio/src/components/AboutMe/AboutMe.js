import React from 'react';
import styled from 'styled-components';
import AboutMeContents from './AboutMeContents';

const AboutMeBlock = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #717a88, 55%, #444751);
  padding-bottom: 5%;
  h1 {
    display: inline-block;
    font-size: 4rem;
    color: white;
    font-weight: 900;
    margin-top: 13%;
    padding-left: 25%;
  }
  p {
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 10%;
  }
  .number {
    color: #959daa;
    margin-right: 15px;
  }
  .dash {
    color: #61d25b;
  }
`;

const AboutMeContentsBlock = styled.div`
  width: 1000px;
  height: 500px;
  background: #353b4e;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 12px 0 rgba(0, 0, 0, 0.3);
`;

function AboutMe() {
  return (
    <AboutMeBlock>
      <h1>
        I<span className="dash">'</span> M<br />
        A FRONT - END <br />
        DEVELOPER<span className="dash">.</span>
      </h1>
      <p id="about">
        <span className="number">01</span>ABOUT ME
      </p>
      <AboutMeContentsBlock>
        <AboutMeContents />
      </AboutMeContentsBlock>
    </AboutMeBlock>
  );
}

export default AboutMe;
