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
        title="PORTFOLIO"
        explain="
            개인 포트폴리오 웹사이트이며,/n
            styled-components로 css를 구현,/n
            react-router로 여러화면을 구성하였습니다.
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
