import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkPage1 from './GeistPage1';
import WorkPage2 from './GeistPage2';
import WorkPage3 from './GeistPage3';
import WorkPage4 from './GeistPage4';
import WorkPage5 from './GeistPage5';
import HomeButton from '../../Button/HomeButton';
import ScrollToTop from '../../Button/ScrollToTop';

const ButtonGroup = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-around;
  position: fixed;
  bottom: 5vh;
  right: 3%;
  padding-right: 25px;
`;

function Geist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <WorkPage1 />
      <WorkPage2 />
      <WorkPage3 />
      <WorkPage4 />
      <WorkPage5 />
      <ButtonGroup>
        <HomeButton />
        <ScrollToTop />
      </ButtonGroup>
    </>
  );
}

export default Geist;
