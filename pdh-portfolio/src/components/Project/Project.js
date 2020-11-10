import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import geist from '../../image/geist.png';
import foodfesta from '../../image/foodfesta.png';
import portfolio from '../../image/portfolio.png';

const bounce = keyframes`{
  0%, 100%, 20%, 53%, 80% {
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transform: translate3d(0, 0, 0)
  }
  40%, 43% {
    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
    transform: translate3d(0, -30px, 0)
  }
  70% {
    transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
    transform: translate3d(0, -15px, 0)
  }
  90% {
    transform: translate3d(0, -4px, 0)
  }
}`;

const ProjectBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 80%, #4e5365);
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

const ProjectImage = styled.img`
  width: 250px;
  height: 250px;
  border: solid 1px #959daa;
  box-shadow: 5px 10px 15px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    animation: ${bounce} 0.8s;
    /* transform: scale(1.1);
    transition: 0.5s; */
  }
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
            <ProjectImage src={geist}></ProjectImage>
          </Link>
          <Link to="/foodfesta">
            <ProjectImage src={foodfesta}></ProjectImage>
          </Link>
          <Link to="/portfolio">
            <ProjectImage src={portfolio}></ProjectImage>
          </Link>
        </ProjectBox>
      </ProjectBlock>
    </>
  );
}

export default Project;
