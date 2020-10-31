import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';
import product from '../../../image/product.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 50%, #4e5365);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .img {
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 750px;
  height: 400px;
  & + & {
    margin: 30px 0 0;
  }
`;

function WorkPage1() {
  return (
    <WorkBlock>
      <Explanation
        title="TEAM/nPROJECT"
        explain="
            IT훈련기관 KIC캠퍼스 학원을 다니며 배웠던 내용들로 팀을 만들고 실무의
            감을 익히기 위해 진행했던 프로젝트 입니다. /n웹 사이트의 다양한 기능과
            기업의 효율적이며 편리한 업무를 위해 프로젝트 주제로 그룹웨어 사이트를
            선정하였습니다."
      />
      <div className="img">
        <Image src={product}></Image>
        <Image src={main}></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage1;
