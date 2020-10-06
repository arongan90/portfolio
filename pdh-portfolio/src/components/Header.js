import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  height: 100px;
  background: #717a88;
  color: #a5a5a5;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-left: 25%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const NavBar = styled.div`
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    color: #61d25b;
  }
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <NavBar>ABOUT ME</NavBar>
        <NavBar>SKILLS</NavBar>
        <NavBar>PROJECT</NavBar>
        <NavBar>CAREER</NavBar>
        <NavBar>CONTACT</NavBar>
      </HeaderBlock>
    </>
  );
}

export default Header;
