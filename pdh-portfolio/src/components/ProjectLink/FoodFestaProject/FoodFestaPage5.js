import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import food_web from '../../../image/food_web.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #717a88, 85%, #4e5365);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 850px;
  height: 550px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

function FoodFestaPage5() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="푸드페스타/n홈페이지"
        explain="
          이미지를 클릭하시면/n
          food-festa 웹 사이트로/n
          이동합니다.
        "
      />
      <ImageBlock>
        <a
          href="http://www.food-festa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={food_web}></Image>
        </a>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage5;
