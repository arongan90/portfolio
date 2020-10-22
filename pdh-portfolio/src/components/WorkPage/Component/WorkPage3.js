import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #717a88;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  width: 850px;
  height: 500px;
  position: relative;
  right: -70%;
`;

function WorkPage1() {
  return (
    <WorkBlock>
      <Explanation />
      <div className="img">
        <Image></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage1;
