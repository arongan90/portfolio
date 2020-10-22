import React from 'react';
import styled from 'styled-components';

const ExplanBlock = styled.div`
  width: 300px;
  height: 500px;
  box-sizing: border-box;
  color: white;
  h1 {
    font-size: 3rem;
  }
`;

const Line = styled.div`
  width: 60px;
  height: 2px;
  background: white;
  margin: 100px 0 100px;
`;
const Text = styled.span`
  display: inline-block;
  line-height: 1.8rem;
  width: 280px;
`;

function Explanation() {
  return (
    <ExplanBlock>
      <h1>
        TEAM
        <br />
        PROJECT
      </h1>
      <Line />
      <Text>
        IT훈련기관 KIC캠퍼스 학원을 다니며 배웠던 내용들로 팀을 만들고 실무의
        감을 익히기 위해 진행했던 프로젝트 입니다. 웹 사이트의 다양한 기능과
        기업의 효율적이며 편리한 업무를 위해 프로젝트 주제로 그룹웨어 사이트를
        선정하였습니다.
      </Text>
    </ExplanBlock>
  );
}

export default Explanation;
