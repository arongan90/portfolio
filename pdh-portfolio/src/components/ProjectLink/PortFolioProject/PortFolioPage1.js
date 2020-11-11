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
`;
const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
        title="PORTFOLIO/nPROJECT"
        explain="
            현재 보고계신 저의 포트폴리오 웹 사이트이며/n
            Adobe Xd로 디자인 후,/n
            React를 사용하여 구현하였으며,/n
            styled-components 및/n
            react-router를 사용하였습니다.
          "
      />
      <ImageBlock>
        <Image src={product}></Image>
        <Image src={main}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage1;
