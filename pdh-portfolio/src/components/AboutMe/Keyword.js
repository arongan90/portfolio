import React from 'react';
import styled, { css } from 'styled-components';

const position = {
  A: { left: '-350px', top: '40px' },
};

const KeywordText = styled.span`
  display: block;
  width: 300px;
  height: 80px;
  color: white;
  text-align: right;
  position: absolute;
  font-size: 0.875rem;
  b {
    font-size: 1rem;
  }

  left: -350px;
  top: 45px;
`;

const KeywordIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #717a88;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  position: absolute;

  left: -25px;
  top: 50px;

  ${props => props.position && css``}
`;

function Keyword({ position }) {
  return (
    <>
      <KeywordText>
        <b>성실함과 책임감</b>
        <br />
        임원수행직 및 현금호송보안업의 경험으로
        <br />
        사회생활에서 제일 중요한 <br />
        성실성과 책임감을 배우게 되었습니다
      </KeywordText>
      <KeywordIcon>Keyword A</KeywordIcon>
      <KeywordIcon>Keyword B</KeywordIcon>
      <KeywordIcon>Keyword C</KeywordIcon>
      <KeywordIcon>Keyword D</KeywordIcon>
    </>
  );
}

export default Keyword;
