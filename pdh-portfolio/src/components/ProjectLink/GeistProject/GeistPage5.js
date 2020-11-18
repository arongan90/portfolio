import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import restful from '../../../image/restful.png';
import jquery from '../../../image/jquery.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #717a88, 85%, #5a5f70);
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

function GeistPage5() {
  return (
    <WorkBlock>
      <Explanation
        title="주요 코드"
        explain="
          RestFul API를 사용하여, client와 server가/n
          Ajax를 통해 데이터를 요청 및 응답하였으며,/n 
          jQuery를 사용하여 각 기능을 구현하였습니다.
        "
      />
      <ImageBlock>
        <Image src={restful}></Image>
        <Image src={jquery}></Image>
      </ImageBlock>
    </WorkBlock>
  );
}

export default GeistPage5;
