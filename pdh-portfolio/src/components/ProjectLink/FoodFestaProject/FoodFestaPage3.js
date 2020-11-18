import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import food_login from '../../../image/food_login.png';
import food_register from '../../../image/food_register.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #69717e, 95%, #808895);
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
  width: 365px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;

function FoodFestaPage3() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="로그인/n회원가입"
        explain="
          최대한 심플한 UI디자인과 맛있어 보이는/n
          포인트 컬러를 고려하여 식욕을 증진하고/n
          따뜻한 느낌을 주는 주황색으로 선정하였으며,/n
          필요한 요소들만 깔끔하게 디자인 하였습니다.        
        "
      />
      <ImageBlock>
        <Image src={food_login}></Image>
        <Image src={food_register}></Image>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage3;
