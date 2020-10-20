import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  width: 810px;
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
  width: 80%;
  height: 20px;
`;
const StickColor = styled.div`
  display: flex;
  background-color: #61d25b;
  width: ${props => props.percent}%;
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
  width: 55%;
  margin: 0 auto;
  margin-bottom: 1.3rem;
`;

function SkillBar({ title, percentNumber, percentBar, explain }) {
  const propPercent = parseInt(percentBar);
  return (
    <>
      <Box>
        <Title>{title}</Title>
        <StickBox>
          <StickColor percent={propPercent} />
        </StickBox>
        <Number>{percentNumber}%</Number>
      </Box>
      <Explain>{explain}</Explain>
    </>
  );
}

export default SkillBar;
