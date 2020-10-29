import React from 'react';
import styled, { css } from 'styled-components';

const TextPosition = {
  A: { left: '-350px', top: '40px' },
  B: { left: '350px', top: '40px' },
  C: { left: '-350px', top: '195px' },
  D: { left: '350px', top: '195px' },
};

const IconPosition = {
  A: { left: '-25px', top: '50px' },
  B: { left: '275px', top: '50px' },
  C: { left: '-25px', top: '200px' },
  D: { left: '275px', top: '200px' },
};

const TextStyle = css`
  ${({ position }) => css`
    top: ${TextPosition[position].top};
    left: ${TextPosition[position].left};
  `}
`;

const IconStyle = css`
  ${({ position }) => css`
    top: ${IconPosition[position].top};
    left: ${IconPosition[position].left};
  `}
`;

const TextAlign = css`
  ${({ align }) => css`
    text-align: ${align};
  `}
`;

const KeywordText = styled.span`
  display: block;
  width: 300px;
  height: 80px;
  color: lightgray;
  position: absolute;
  font-size: 0.875rem;
  b {
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
    word-spacing: 2px;
  }
  letter-spacing: 1px;
  ${TextAlign}
  ${TextStyle}
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
  ${IconStyle}
`;

function Keyword({ icon, children, position, align }) {
  return (
    <>
      <KeywordText position={position} align={align}>
        {children}
      </KeywordText>
      <KeywordIcon position={position} align={align}>
        {icon}
      </KeywordIcon>
    </>
  );
}

export default Keyword;
