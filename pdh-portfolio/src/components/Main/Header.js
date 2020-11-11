import React from 'react';
import styled from 'styled-components';
import ScrollIntoView from 'react-scroll-into-view';

const HeaderBlock = styled.div`
  position: relative;
  z-index: 1;
  height: 100px;
  background: #717a88;
  color: #a5a5a5;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: 25%;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  span {
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
        <ScrollIntoView selector="#about">
          <span>ABOUT ME</span>
        </ScrollIntoView>
        <ScrollIntoView selector="#skills">
          <span>SKILLS</span>
        </ScrollIntoView>
        <ScrollIntoView selector="#project">
          <span>PROJECT</span>
        </ScrollIntoView>
        <ScrollIntoView selector="#career">
          <span>CAREER</span>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact">
          <span>CONTACT</span>
        </ScrollIntoView>
      </HeaderBlock>
    </>
  );
}

export default Header;
