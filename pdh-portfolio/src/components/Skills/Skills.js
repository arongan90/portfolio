import React from 'react';
import styled, { css } from 'styled-components';
import StickChart from './SkillBar';

const SkillsBlock = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  background: #444751;
  padding-top: 180px;
  box-sizing: border-box;
  p {
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 0;
  }
  .number {
    color: #959daa;
    margin-right: 15px;
  }

  .skill {
    color: white;
    font-size: 2rem;
    text-align: right;
  }
`;

const SkillContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillBar = styled.div`
  width: 480px;
  height: 25px;
  background: #61d25b;
  margin: 20px;
`;

function Skills() {
  return (
    <SkillsBlock>
      <p>
        <span className="number">02</span>SKILLS
      </p>
      <SkillContents>
        <StickChart title="HTML" percentBar="80" percentNumber="80" />
        <StickChart title="HTML" percentBar="60" percentNumber="60" />
      </SkillContents>
    </SkillsBlock>
  );
}

export default Skills;
