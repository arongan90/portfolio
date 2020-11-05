import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import login from '../../../image/login.png';
import register from '../../../image/register.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #5a5f70, 95%, #717a88);
  display: flex;
  align-items: center;
  justify-content: space-around;
  .img {
    width: 900px;
    display: flex;
    justify-content: center;
  }
`;
const Image = styled.img`
  width: 450px;
  height: 700px;
  margin-right: 50px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
`;

function FoodFestaPage2() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="로그인/n회원가입"
        explain="
        NAVER의 로그인, 회원가입 페이지를
        참고,/n우아한 형제들의 민트색을
        전체적인 테마로/n선정하였으며,
        jQuery를 이용하여 조건에/n맞지 않는
        값을 입력 받으면 경고메세지가/n
        보여지도록 구현하였습니다."
      />
      <div className="img">
        <Image src={login}></Image>
        <Image src={register}></Image>
      </div>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage2;
