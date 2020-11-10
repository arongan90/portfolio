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
            현재 보고계신 포트폴리오 웹 사이트이며/n
            React를 사용하여 전제적으로 작성하였으며,/n
            styled-components로 css를 구현,/n
            react-router로 여러 페이지를 SPA로/n
            구성하였습니다.
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
