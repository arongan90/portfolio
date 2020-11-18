import React from 'react';
import styled from 'styled-components';

const ExplanBlock = styled.div`
  width: 300px;
  height: 750px;
  box-sizing: border-box;
  color: white;
  h1 {
    font-size: 3rem;
  }
`;
const Line = styled.div`
  width: 60px;
  height: 2px;
  background: white;
  margin: 100px 0 100px;
`;
const Text = styled.span`
  display: inline-block;
  line-height: 1.8rem;
  width: 300px;
`;

function Explanation({ title, explain }) {
  return (
    <>
      <ExplanBlock>
        <h1>
          {title.split('/n').map((line, index) => {
            return (
              <div key={index}>
                {line}
                <br />
              </div>
            );
          })}
        </h1>
        <Line />
        <Text>
          {explain.split('/n').map((line, index) => {
            return (
              <div key={index}>
                {line}
                <br />
              </div>
            );
          })}
        </Text>
      </ExplanBlock>
    </>
  );
}

export default Explanation;
