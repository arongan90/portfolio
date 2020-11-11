import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import project from '../../../image/project.png';
import projectmodify from '../../../image/projectmodify.png';

const PortFolioBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 95%, #808895);
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
  width: 450px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.2);
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
          Hook에서는 상태를 관리하여/n
          Scroll이 Top에 위치하면/n
          버튼이 사라지도록 구현하였습니다./n
        "
      />
      <ImageBlock>
        <Image src={project}></Image>
        <Image src={projectmodify}></Image>
      </ImageBlock>
    </PortFolioBlock>
  );
}

export default PortFolioPage4;
