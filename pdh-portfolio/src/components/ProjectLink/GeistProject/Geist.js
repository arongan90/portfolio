import React, { useEffect } from 'react';
import styled from 'styled-components';
import GeistPage1 from './GeistPage1';
import GeistPage2 from './GeistPage2';
import GeistPage3 from './GeistPage3';
import GeistPage4 from './GeistPage4';
import GeistPage5 from './GeistPage5';
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
      <GeistPage1 />
      <GeistPage2 />
      <GeistPage3 />
      <GeistPage4 />
      <GeistPage5 />
      <ButtonGroup>
        <HomeButton />
        <ScrollToTop />
      </ButtonGroup>
    </>
  );
}

export default Geist;
