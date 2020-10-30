import React from 'react';
import styled, { keyframes } from 'styled-components';
import useScrollHook from '../../hooks/useScrollHook';

const slideBar = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.percent}%;
  }
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  width: 900px;
  margin: 0 auto;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #bfc6d3;
  text-align: right;
  width: 175px;
  margin-right: 2rem;
`;
const StickBox = styled.div`
  display: flex;
  background-color: #444751;
  width: 730px;
  height: 20px;
  margin-right: 5px;
`;

const StickColor = styled.div`
  display: flex;
  background-color: #61d25b;
  width: ${props => props.percent}%;
  animation: ${slideBar} ${props => props.duration}s;
`;
const Number = styled.span`
  font-size: 2rem;
  color: #bfc6d3;
  width: 70px;
  text-align: left;
`;
const Explain = styled.span`
  font-size: 1rem;
  color: #bfc6d3;
  width: 435px;
  margin: 0 auto;
  margin-bottom: 1.3rem;
`;

function SkillBar({ title, percentNumber, percentBar, explain, durationTime }) {
  const propPercent = parseInt(percentBar);
  const propDuration = parseFloat(durationTime);
  const slideAnimation = useScrollHook();
  return (
    <>
      <Box>
        <Title>{title}</Title>
        <StickBox {...slideAnimation} className={slideAnimation && 'style'}>
          <StickColor percent={propPercent} duration={propDuration} />
        </StickBox>
        <Number>{percentNumber}%</Number>
      </Box>
      <Explain>{explain}</Explain>
    </>
  );
}

export default SkillBar;
