import React, { useEffect } from 'react';
import styled from 'styled-components';
import PortFolioPage1 from './PortFolioPage1';
import PortFolioPage2 from './PortFolioPage2';
import PortFolioPage3 from './PortFolioPage3';
import PortFolioPage4 from './PortFolioPage4';
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

function PortFolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PortFolioPage1 />
      <PortFolioPage2 />
      <PortFolioPage3 />
      <PortFolioPage4 />
      <ButtonGroup>
        <HomeButton />
        <ScrollToTop />
      </ButtonGroup>
    </>
  );
}

export default PortFolio;
