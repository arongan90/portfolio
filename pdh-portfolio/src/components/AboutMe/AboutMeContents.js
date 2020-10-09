import React from 'react';
import styled from 'styled-components';
import MyProfile from './MyProfile';

const IntroText = styled.text`
  color: white;
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 8px;
    letter-spacing: 5px;
  }
  h5 {
    font-size: 28px;
    font-weight: 400;
    margin: 0;
  }
`;

const OutLine = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #717a88;
  margin: 20px 350px 40px;
`;

function AboutMeContents() {
  return (
    <>
      <IntroText>
        <h2>성실하고 바른 인성을 가진 '박동한'입니다.</h2>
        <h5>사람을 좋아하고, 커뮤니케이션에 능한 개발자</h5>
        <OutLine>
          <MyProfile />
        </OutLine>
      </IntroText>
    </>
  );
}

export default AboutMeContents;
