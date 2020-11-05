import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';
import product from '../../../image/product.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #717a88, 95%, #5a5f70);
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
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  & + & {
    margin: 30px 0 0;
  }
`;

function PortFolioPage1() {
  return (
    <PortFolioBlock>
      <Explanation
        title="TEAM/nPROJECT"
        explain="
            IT 훈련기관을 수료하며 배웠던 내용들로, 팀을 만들고 실무의
            감을 익히기 위해 진행한 저의 첫 프로젝트 입니다./n
            주제의 특성에 맞게 다양한 기능 및 기업의 효율적이며 편리한 업무를
            위해 프로젝트 주제로 그룹웨어 사이트를 선정하였습니다.
          "
      />
      <div className="img">
        <Image src={product}></Image>
        <Image src={main}></Image>
      </div>
    </PortFolioBlock>
  );
}

export default PortFolioPage1;
