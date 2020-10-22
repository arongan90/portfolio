import React from 'react';
import styled, { css } from 'styled-components';

const CareerPosition = {
  first: { left: '-265px' },
  second: { left: '65px' },
  third: { left: '-265px' },
  fourth: { left: '65px' },
};

const CareerStyle = css`
  ${({ position }) => css`
    left: ${CareerPosition[position].left};
  `}
`;

const TextAlign = css`
  ${({ align }) => css`
    text-align: ${align};
  `}
`;

const Line = styled.div`
  width: 1px;
  height: 120px;
  background: #61d25b;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background: #61d25b;
  border-radius: 50%;
`;

const Explain = styled.div`
  width: 215px;
  height: 200px;
  color: white;
  .title {
    margin-bottom: 1rem;
    color: #61d25b;
  }
  overflow-wrap: break-word;
  position: relative;
  ${CareerStyle}
  ${TextAlign}
`;

function CareerComponent({ title, explain, position, align }) {
  return (
    <>
      <Circle>
        <Explain position={position} align={align}>
          <div className="title">{title}</div>
          <div>{explain}</div>
        </Explain>
      </Circle>
      <Line />
    </>
  );
}

export default CareerComponent;
