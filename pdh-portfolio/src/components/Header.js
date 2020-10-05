import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  height: 100px;
  background: #717a88;
`;

const HeaderButton = styled.div`
  margin: 40 520 41 360;
  opacity: 0;
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <HeaderButton>ABOUT ME</HeaderButton>
      </HeaderBlock>
    </>
  );
}

export default Header;
