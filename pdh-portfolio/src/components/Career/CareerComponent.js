import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideBar = keyframes`
  from {
    height: 0;
  }
  to {
    height: 120px;
  }
`;

const CareerPosition = {
  first: { left: '-290px' },
  second: { left: '50px' },
  third: { left: '-290px' },
  fourth: { left: '50px' },
};

const CareerStyle = css`
  ${({ position }) => css`
    left: ${CareerPosition[position].left};
    top: ${CareerPosition[position].top};
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
  animation: ${slideBar} 3s;
`;
const Circle = styled.div`
  width: 15px;
  height: 15px;
  background: #61d25b;
  border-radius: 50%;
  opacity: 0;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transition: 3s;
    `}
`;

const Explain = styled.div`
  width: 250px;
  height: 200px;
  color: white;
  .title {
    margin-bottom: 1rem;
    color: #61d25b;
  }
  position: relative;
  ${CareerStyle}
  ${TextAlign}
`;

function CareerComponent({ title, explain, position, align, visible }) {
  return (
    <>
      <Circle position={position} visible={visible}>
        <Explain position={position} align={align}>
          <div className="title">{title}</div>
          {explain.split('/n').map((line, index) => {
            return (
              <div key={index}>
                {line}
                <br />
              </div>
            );
          })}
        </Explain>
      </Circle>
      <Line />
    </>
  );
}

export default CareerComponent;
