import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Career from './Career/Career';
import Contact from './Contact/Contact';

const HeaderBlock = styled.div`
  height: 100px;
  background: #717a88;
  color: #a5a5a5;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: 25%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);

  .NavBar {
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
        <Link to="/about" className="NavBar">
          ABOUT ME
        </Link>
        <Link to="/skills" className="NavBar">
          SKILLS
        </Link>
        <Link to="/project" className="NavBar">
          PROJECT
        </Link>
        <Link to="/career" className="NavBar">
          CAREER
        </Link>
        <Link to="/contact" className="NavBar">
          CONTACT
        </Link>
      </HeaderBlock>
      <Route path="/about" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/project" component={Project} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default Header;
