import React from 'react';
import styled from 'styled-components';
import geist from '../../image/geist.png';
import foodfesta from '../../image/foodfesta.png';
import portfolio from '../../image/portfolio.png';

const ProjectBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #4e5365;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 0;
    margin-bottom: 120px;
  }
  .number {
    color: #959daa;
    margin-right: 15px;
  }
`;

const ProjectBox = styled.div`
  width: 750px;
  height: 250px;
  display: flex;
`;

const ProjectLink = styled.img`
  width: 250px;
  height: 250px;
  border: solid 1px #4e5365;
  cursor: pointer;
`;

function Project() {
  return (
    <>
      <ProjectBlock>
        <p>
          <span className="number">03</span>PROJECT
        </p>
        <ProjectBox>
          <ProjectLink src={geist}></ProjectLink>
          <ProjectLink src={foodfesta}></ProjectLink>
          <ProjectLink src={portfolio}></ProjectLink>
        </ProjectBox>
      </ProjectBlock>
    </>
  );
}

export default Project;