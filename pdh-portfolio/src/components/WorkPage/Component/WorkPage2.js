import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import login from '../../../image/login.png';
import register from '../../../image/register.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #5a5f70;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 450px;
  height: 700px;
  margin-right: 50px;
  position: relative;
  right: -55%;
`;

function WorkPage1() {
  return (
    <WorkBlock>
      <Explanation />
      <div className="img">
        <Image src={login}></Image>
        <Image src={register}></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage1;
