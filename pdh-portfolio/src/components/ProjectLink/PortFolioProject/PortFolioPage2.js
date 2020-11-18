import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import portfolio_xd1 from '../../../image/portfolio_xd1.png';
import portfolio_xd2 from '../../../image/portfolio_xd2.png';

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
  transition: 0.7s;
  &:hover {
    transform: scale(1.15);
  }
`;

function PortFolioPage2() {
  return (
    <PortFolioBlock>
      <Explanation
        title="Adobe Xd/nDesign"
        explain="
          포트폴리오 템플릿 구조를 참고하여/n
          시크하면서 집중이 잘 되는 무채색의/n
          어두운 계열로 디자인 하였으며,/n
          포인트로 밝은 연두색을 주었습니다./n
          프로토타입으로 각 버튼에 맞게/n
          페이지 이동을 설정하였으며,/n
          개발 할 때 구조를 편하게/n
          짜기위하여 그룹별로 묶어서/n
          디자인 하였습니다./n
        "
      />
      <ImageBlock>
        <Image src={portfolio_xd1}></Image>
        <Image src={portfolio_xd2}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage2;
