import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import food_main1 from '../../../image/food_main1.png';
import food_main2 from '../../../image/food_main2.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #808895, 95%, #717a88);
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
  width: 350px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

function FoodFestaPage4() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="메인/n페이지"
        explain="
          메인화면 역시 최대한 심플하고/n
          한눈에 들어오는 구성으로/n
          상단 Tab 메뉴로 각 페이지를/n
          이동하며 같은 데이터를/n
          다양하게 표현하였습니다.
        "
      />
      <ImageBlock>
        <Image src={food_main1}></Image>
        <Image src={food_main2}></Image>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage4;
