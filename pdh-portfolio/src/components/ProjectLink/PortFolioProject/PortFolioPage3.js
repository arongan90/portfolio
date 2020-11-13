import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #717a88, 95%, #4e5365);
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

function PortFolioPage3() {
  return (
    <PortFolioBlock>
      <Explanation
        title="프로젝트/n주요 코드"
        explain="
          시크하면서 집중이 잘 되는 무채색의
          각 컴포넌트 별로 구분하여 구조를 잡고,/n
          컴포넌트 별 코드의 길이가 약 60~80줄/n
          사이로 불필요한 코드를 줄이고/n
          가독성을 높였습니다./n
          Styled-components로 css를 작성/n
          하였으며, props를 통해 조건에 맞는/n 
          animation 효과를 주었습니다./n
        "
      />
      <ImageBlock>
        <Image src={main}></Image>
        <Image src={main}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage3;
