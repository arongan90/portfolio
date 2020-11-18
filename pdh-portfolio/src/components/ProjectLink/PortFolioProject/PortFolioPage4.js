import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import scroll_hooks from '../../../image/scroll_hooks.png';
import scroll_to_top from '../../../image/scroll_to_top.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 70%, #4e5365);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 500px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

function PortFolioPage4() {
  return (
    <PortFolioBlock>
      <Explanation
        title="프로젝트/n주요 코드"
        explain="
          IntersectionObserver API로/n
          Scroll의 위치에 반응하여/n
          Animation 효과가 적용 되도록/n
          Hook을 만들어 각 컴포넌트에서/n
          사용할 수 있도록 구현하였습니다./n
          또한 Top 버튼은 상태를 관리하여/n
          Scroll이 최상단에 위치하였을 땐/n
          버튼이 사라지도록 구현하였습니다./n
        "
      />
      <ImageBlock>
        <Image src={scroll_hooks}></Image>
        <Image src={scroll_to_top}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage4;
