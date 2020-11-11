import React from 'react';
import styled from 'styled-components';
import SkillBar from './SkillBar';
import useScrollHook from '../../hooks/useScrollHook';

const SkillsBlock = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #444751, 95%, #4e5365);
  padding-top: 180px;
  box-sizing: border-box;
  p {
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 0;
  }
`;
const TitleNumber = styled.span`
  color: #959daa;
  margin-right: 15px;
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
  const animationScroll = useScrollHook();
  const { visible } = animationScroll;

  return (
    <SkillsBlock id="skills">
      <p>
        <TitleNumber className="number">02</TitleNumber>SKILLS
      </p>
      <SkillContents {...animationScroll}>
        <SkillBar
          title="HTML"
          percentBar="80"
          percentNumber="80"
          explain="HTML 문법 이해 및 태그 속성 활용 가능"
          durationTime="1"
          visible={visible}
        />
        <SkillBar
          title="CSS"
          percentBar="80"
          percentNumber="80"
          explain="CSS 및 SCSS 스타일링 활용 가능"
          durationTime="1.3"
          visible={visible}
        />
        <SkillBar
          title="Java Script"
          percentBar="75"
          percentNumber="75"
          explain="ES6 문법 이해 및 JQuery 활용 가능"
          durationTime="1.6"
          visible={visible}
        />
        <SkillBar
          title="React"
          percentBar="70"
          percentNumber="70"
          explain="Styled-Component 및 Redux-Middleware 활용가능"
          durationTime="1.9"
          visible={visible}
        />
        <SkillBar
          title="JSP"
          percentBar="60"
          percentNumber="60"
          explain="모델 1, 2 이해 및 MVC 패턴 활용 가능"
          durationTime="2.2"
          visible={visible}
        />
        <SkillBar
          title="Adobe XD"
          percentBar="75"
          percentNumber="75"
          explain="기본적인 디자인 툴 활용 가능"
          durationTime="2.5"
          visible={visible}
        />
      </SkillContents>
      <AddExplain>
        이 외에도 IT 훈련기관을 통하여 Java, Oracle, Spring 등 웹의 전반적인
        흐름을 경험하였습니다
      </AddExplain>
    </SkillsBlock>
  );
}

export default React.memo(Skills);
