import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import restful from '../../../image/restful.png';
import jquery from '../../../image/jquery.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #808895;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .img {
    width: 900px;
    display: flex;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 450px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
`;

function PortFolioPage6() {
  return (
    <PortFolioBlock>
      <Explanation
        title="주요 코드"
        explain="
          RestFul API를 사용하여
          Ajax로 서버와 통신
          JSP를 사용하여 페이지를
          구현하였습니다.
        "
      />
      <div className="img">
        <Image src={restful}></Image>
        <Image src={jquery}></Image>
      </div>
    </PortFolioBlock>
  );
}

export default PortFolioPage6;
