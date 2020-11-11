import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import portfolio_xd from '../../../image/portfolio_xd.png';
import register from '../../../image/register.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 95%, #717a88);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 450px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
`;

function PortFolioPage2() {
  return (
    <PortFolioBlock>
      <Explanation
        title="Adobe Xd"
        explain="
        시크하면서도 집중이 잘 되는
        무채색 컬러로 디자인 하였으며, 
        포인트로 밝은 연두색을 주었습니다.
        프로토타입으로 각 버튼에 맞게 
        페이지 이동을 설정하였으며,
        개발 할 때 구조를 편하게 
        짜기위하여 그룹별로 묶어서
        디자인 하였습니다.
        "
      />
      <ImageBlock>
        <Image src={portfolio_xd}></Image>
        <Image src={register}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage2;
