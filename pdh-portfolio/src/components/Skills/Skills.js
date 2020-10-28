import React from 'react';
import styled from 'styled-components';
import SkillBar from './SkillBar';

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
`;

const SkillContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  margin: 0 auto;
  margin-top: 70px;
`;

const AddExplain = styled.span`
  font-size: 1.5rem;
  color: white;
  margin: 0 auto;
  margin-top: 50px;
`;

function Skills() {
  return (
    <SkillsBlock id="skills">
      <p>
        <span className="number">02</span>SKILLS
      </p>
      <SkillContents>
        <SkillBar
          title="HTML"
          percentBar="80"
          percentNumber="80"
          explain="HTML 문법 이해 및 태그 속성 활용 가능"
        />
        <SkillBar
          title="CSS"
          percentBar="80"
          percentNumber="80"
          explain="CSS 및 SCSS 스타일링 활용 가능"
        />
        <SkillBar
          title="Java Script"
          percentBar="75"
          percentNumber="75"
          explain="ES6 문법 이해 및 JQuery 활용 가능"
        />
        <SkillBar
          title="React"
          percentBar="70"
          percentNumber="70"
          explain="Styled-Component 및 Redux-Middleware 활용가능"
        />
        <SkillBar
          title="JSP"
          percentBar="60"
          percentNumber="60"
          explain="모델 1, 2 이해 및 MVC 패턴 활용 가능"
        />
        <SkillBar
          title="Adobe XD"
          percentBar="75"
          percentNumber="75"
          explain="기본적인 디자인 툴 활용 가능"
        />
      </SkillContents>
      <AddExplain>
        이 외에도 IT 훈련기관을 통하여 Java, Oracle, Spring 등 웹의 전반적인
        흐름을 경험하였습니다
      </AddExplain>
    </SkillsBlock>
  );
}

export default Skills;
