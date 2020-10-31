import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import login from '../../../image/login.png';
import register from '../../../image/register.png';

const WorkBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #5a5f70;
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
`;

function WorkPage2() {
  return (
    <WorkBlock>
      <Explanation
        title="로그인 회원가입"
        explain="
        NAVER의 로그인, 회원가입 페이지를
        참고, 우아한형제들의 민트색을
        전체적인 테마로 선정하였으며,
        jQuery를 이용하여 조건에 맞지않는
        값을 입력 받으면 경고메세지가
        보여지도록 구현하였습니다."
      />
      <div className="img">
        <Image src={login}></Image>
        <Image src={register}></Image>
      </div>
    </WorkBlock>
  );
}

export default WorkPage2;
