import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';
import product from '../../../image/product.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 95%, #5a5f70);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 700px;
  height: 400px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
  & + & {
    margin: 30px 0 0;
  }
`;

function GeistPage1() {
  return (
    <WorkBlock>
      <Explanation
        title="TEAM/nPROJECT"
        explain="
            IT 훈련기관을 수료하며 배웠던 내용들로,/n
            팀을 만들어 진행한 저의 첫 프로젝트 입니다./n
            기업의 효율적이며 편리한 업무를 위해/n
            프로젝트 주제로 그룹웨어 사이트를/n
            선정하였으며, 주제 특성 상 여러가지 기능들을/n
            구현해 볼 수 있고, Back-end와 협업하여/n
            업무를 할 수 있었던 좋은 경험이었습니다.
          "
      />
      <ImageBlock>
        <Image src={product}></Image>
        <Image src={main}></Image>
      </ImageBlock>
    </WorkBlock>
  );
}

export default GeistPage1;
