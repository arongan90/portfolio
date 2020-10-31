import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import project from '../../../image/project.png';
import projectmodify from '../../../image/projectmodify.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #4e5365;
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
  height: 400px;
  & + & {
    margin: 30px 0 0;
  }
`;

function WorkPage4() {
  return (
    <WorkBlock>
      <Explanation
        title="프로젝트 페이지"
        explain="
        진행중인 프로젝트를 
        관리, 조회 할 수 있는 페이지로
        작성, 수정 페이지는 Modal로 만들었으며,
        선택된 프로젝트 번호를 Modal 페이지에 전달하여
        프로젝트 번호로 서버와 데이터를 
        통신하도록 구성하였습니다.
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
