import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #717a88;
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
  display: flex;
  flex-direction: column;
  width: 850px;
  height: 500px;
`;

function WorkPage3() {
  return (
    <WorkBlock>
      <Explanation
        title="메인 페이지"
        explain="그룹웨어 사이트를 고려해
          최대한 심플하게 제작하였으며,
          부트스트랩 및 캘린더API를 이용하여
          화면을 구현하였습니다."
      />
      <div className="img">
        <Image src={main}></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage3;
