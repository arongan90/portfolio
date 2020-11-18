import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import restful from '../../../image/restful.png';
import jquery from '../../../image/jquery.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 95%, #4e5365);
  /* background: #808895; */
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

function PortFolioPage5() {
  return (
    <PortFolioBlock>
      <Explanation
        title="프로젝트/n주요 코드"
        explain="
          참고
        "
      />
      <ImageBlock>
        <Image src={restful}></Image>
        <Image src={jquery}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage5;
