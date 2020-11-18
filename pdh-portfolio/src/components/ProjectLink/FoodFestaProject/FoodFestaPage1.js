import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import food_skill from '../../../image/food_skill.png';
import food_web from '../../../image/food_web.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 95%, #5a5f70);
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
  width: 700px;
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

function FoodFestaPage1() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="Food Festa"
        explain="
          (주)플랫큐브의 인턴직으로 근무하며/n
          농림축산부 앱 개발에 참여하여/n
          기획, 디자인 및 개발을 진행하였습니다./n
          당시 React에 이해와 지식이 조금 부족하였지만,/n
          부족한 부분을 만회하기 위해 더욱/n
          주도적이며 적극적으로 참여하였습니다.        
        "
      />
      <ImageBlock>
        <Image src={food_skill}></Image>
        <Image src={food_web}></Image>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage1;
