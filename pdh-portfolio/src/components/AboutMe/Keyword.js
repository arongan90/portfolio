import React from 'react';
import styled, { css } from 'styled-components';

const TextPositionStyles = {
  A: { left: '-350px', top: '40px' },
  B: { left: '350px', top: '40px' },
  C: { left: '-350px', top: '195px' },
  D: { left: '350px', top: '195px' },
};

const IconPositionStyles = {
  A: { left: '-25px', top: '50px' },
  B: { left: '275px', top: '50px' },
  C: { left: '-25px', top: '200px' },
  D: { left: '275px', top: '200px' },
};

const TextPosition = css`
  ${({ position }) => css`
    top: ${TextPositionStyles[position].top};
    left: ${TextPositionStyles[position].left};
  `}
`;

const IconPosition = css`
  ${({ position }) => css`
    top: ${IconPositionStyles[position].top};
    left: ${IconPositionStyles[position].left};
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
  color: white;
  position: absolute;
  font-size: 0.875rem;
  b {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  ${TextAlign}
  ${TextPosition}
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
  ${IconPosition}/* left: -25px;
  top: 50px; */
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
