import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import food_xd1 from '../../../image/food_xd1.png';
import food_xd2 from '../../../image/food_xd2.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 95%, #69717e);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ImageBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 750px;
  height: 400px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
  & + & {
    margin: 30px 0 0;
  }
`;

function FoodFestaPage2() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="Adobe Xd/nDesign"
        explain="
          기획 당시 클라이언트의 요구사항으로/n
          - 맛있어 보이는 심플한 UI 디자인/n
          - 맛있는 포인트 컬러/n
          - 한눈에 들어오는 구성/n
          - 강해보이지 않는 디자인/n
          - 같은 데이터를 다양하게 표현 등을/n
          주문하여 진행한 작업 과정입니다.
        "
      />
      <ImageBlock>
        <Image src={food_xd1}></Image>
        <Image src={food_xd2}></Image>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage2;
