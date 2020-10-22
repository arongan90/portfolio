import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #4e5365;
  display: flex;
`;
const Image = styled.img`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 400px;
`;

function Work() {
  return (
    <WorkBlock>
      <Explanation />
      <Image></Image>
      <Image></Image>
    </WorkBlock>
  );
}

export default Work;
