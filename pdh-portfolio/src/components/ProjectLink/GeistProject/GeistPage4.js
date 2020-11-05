import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import project from '../../../image/project.png';
import projectmodify from '../../../image/projectmodify.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 95%, #808895);
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
  display: flex;
  width: 750px;
  height: 430px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  & + & {
    margin: 30px 0 0;
  }
`;

function WorkPage4() {
  return (
    <WorkBlock>
      <Explanation
        title="프로젝트/n페이지"
        explain="
        진행중인 프로젝트를 관리, 조회 할 수 있는/n
        페이지로 작성, 수정 페이지는/n
        Modal로 구현, 선택된 프로젝트 번호를/n
        Modal 페이지에 전달하여 프로젝트 번호로/n
        서버와 데이터를 통신하도록 구성하였습니다.
        "
      />
      <div className="img">
        <Image src={project}></Image>
        <Image src={projectmodify}></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage4;
