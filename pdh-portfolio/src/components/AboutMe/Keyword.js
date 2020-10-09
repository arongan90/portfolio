import React from 'react';
import styled, { css } from 'styled-components';

const KeywordBlock = styled.div`
  width: 50px;
  height: 50px;
  background: #717a88;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2;
  position: absolute;
  ${props => props.position && css``}
`;

function Keyword({ children, position }) {
  return (
    <>
      <KeywordBlock>{children}</KeywordBlock>
    </>
  );
}

export default Keyword;
