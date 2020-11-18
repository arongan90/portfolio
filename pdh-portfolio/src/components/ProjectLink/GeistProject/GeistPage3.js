import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #69717e, 95%, #808895);
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
  width: 850px;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

function GeistPage3() {
  return (
    <WorkBlock>
      <Explanation
        title="메인/n페이지"
        explain="
        그룹웨어 사이트를 고려해 메인화면을/n
        최대한 심플하고 한눈에 들어오게 구현하였으며,/n
        부트스트랩 및 캘린더API를 이용하여/n
        화면을 구현하였습니다.
        "
      />
      <ImageBlock>
        <Image src={main}></Image>
      </ImageBlock>
    </WorkBlock>
  );
}

export default GeistPage3;
