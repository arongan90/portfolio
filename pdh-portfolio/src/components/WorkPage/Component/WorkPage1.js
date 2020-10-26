import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #4e5365;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 400px;
  position: relative;
  right: -90%;
  & + & {
    margin: 30px 0 10px;
  }
`;

function WorkPage1() {
  return (
    <WorkBlock>
      <Explanation />
      <div className="img">
        <Image src={main}></Image>
        <Image></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage1;
