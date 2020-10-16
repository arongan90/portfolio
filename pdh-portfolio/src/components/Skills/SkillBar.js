import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
`;
const Title = styled.span`
  font-size: 2rem;
  color: #bfc6d3;
  margin-right: 30px;
`;
const StickBox = styled.div`
  display: flex;
  background-color: #444751;
  width: 100%;
  height: 25px;
`;
const StickColor = styled.div`
  display: flex;
  background-color: #61d25b;
  width: ${props => props.percent}%;
`;
const Number = styled.span`
  font-size: 2rem;
  color: #bfc6d3;
`;

function SkillBar({ title, percentNumber, percentBar }) {
  const propPercent = parseInt(percentBar);
  return (
    <Box>
      <Title>{title}</Title>
      <StickBox>
        <StickColor percent={propPercent} />
      </StickBox>
      <Number>{percentNumber}%</Number>
    </Box>
  );
}

export default SkillBar;
