import React, { useEffect } from 'react';
import styled from 'styled-components';
import FoodFestaPage1 from './FoodFestaPage1';
import FoodFestaPage2 from './FoodFestaPage2';
import FoodFestaPage3 from './FoodFestaPage3';
import FoodFestaPage4 from './FoodFestaPage4';
import FoodFestaPage5 from './FoodFestaPage5';
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

function FoodFesta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FoodFestaPage1 />
      <FoodFestaPage2 />
      <FoodFestaPage3 />
      <FoodFestaPage4 />
      <FoodFestaPage5 />
      <ButtonGroup>
        <HomeButton />
        <ScrollToTop />
      </ButtonGroup>
    </>
  );
}

export default FoodFesta;
