import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideBar = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100px;
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
  height: 100px;
  background: #61d25b;
  animation: ${slideBar} 4s;
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
      transition: ${props.delay}s;
    `}
`;

const Explain = styled.div`
  width: 250px;
  height: 200px;
  color: white;
  position: relative;
  ${CareerStyle}
  ${TextAlign}
`;
const Title = styled.div`
  margin-bottom: 1rem;
  color: #61d25b;
`;

function CareerComponent({ title, explain, position, align, visible, delay }) {
  return (
    <>
      <Circle position={position} visible={visible} delay={delay}>
        <Explain position={position} align={align}>
          <Title>{title}</Title>
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
