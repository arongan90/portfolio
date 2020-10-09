import React from 'react';
import styled from 'styled-components';
import donghan from '../../image/donghan.jpeg';
import Keyword from './Keyword';

const MyProfileBlock = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  margin: 25px 25px;
`;

function MyProfile() {
  return (
    <MyProfileBlock>
      <Keyword>Keyword A</Keyword>
      <Keyword>Keyword B</Keyword>
      <Image src={donghan} />
      <Keyword>Keyword C</Keyword>
      <Keyword>Keyword D</Keyword>
    </MyProfileBlock>
  );
}

export default MyProfile;
