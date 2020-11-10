import React from 'react';
import styled from 'styled-components';
import Explanation from './Explanation';
import main from '../../../image/main.png';

const FoodFestaBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #717a88, 95%, #4e5365);
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
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
`;

function FoodFestaPage3() {
  return (
    <FoodFestaBlock>
      <Explanation
        title="메인 페이지"
        explain="그룹웨어 사이트를 고려해
          최대한 심플하게 제작하였으며,
          부트스트랩 및 캘린더API를 이용하여
          화면을 구현하였습니다."
      />
      <ImageBlock>
        <Image src={main}></Image>
      </ImageBlock>
    </FoodFestaBlock>
  );
}

export default FoodFestaPage3;
