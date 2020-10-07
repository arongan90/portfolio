import React from 'react';
import styled from 'styled-components';

const IntroText = styled.text`
  color: white;
  h2 {
    font-size: 32px;
    font-weight: 500;
  }
  h4 {
    font-size: 28px;
  }
`;

function AboutMeContents() {
  return (
    <>
      <IntroText>
        <h2>성실하고 바른 인성을 가진 '박동한'입니다.</h2>
        <h4>사람을 좋아하고, 커뮤니케이션에 능한 개발자</h4>
      </IntroText>
    </>
  );
}

export default AboutMeContents;
