import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  height: 100px;
  background: #717a88;
  color: #a5a5a5;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: 25%;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
    margin-right: 25px;
    cursor: pointer;
    color: #a5a5a5;
    &:hover {
      color: #61d25b;
    }
  }
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <a href="#about">ABOUT ME</a>
        <a href="#skills">SKILLS</a>
        <a href="#project">PROJECT</a>
        <a href="#career">CAREER</a>
        <a href="#contact">CONTACT</a>
      </HeaderBlock>
    </>
  );
}

export default Header;
