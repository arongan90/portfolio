import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import geist from '../../image/geist.png';
import foodfesta from '../../image/foodfesta.png';
import portfolio from '../../image/portfolio.png';

const ProjectBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 80%, #5a5f70);
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

const LinkToProject = styled.img`
  width: 250px;
  height: 250px;
  border: solid 1px #4e5365;
  cursor: pointer;
`;

function Project() {
  return (
    <>
      <ProjectBlock id="project">
        <p>
          <span className="number">03</span>PROJECT
        </p>
        <ProjectBox>
          <Link to="/geist">
            <LinkToProject src={geist}></LinkToProject>
          </Link>
          <Link to="/foodfesta">
            <LinkToProject src={foodfesta}></LinkToProject>
          </Link>
          <Link to="/portfolio">
            <LinkToProject src={portfolio}></LinkToProject>
          </Link>
        </ProjectBox>
      </ProjectBlock>
    </>
  );
}

export default Project;
