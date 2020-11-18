import React from 'react';
import styled from 'styled-components';
import Keyword from './Keyword';
import Donghan from '../../image/donghan.jpeg';

const AboutMeContentsText = styled.div`
  color: lightgray;
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 20px;
    letter-spacing: 3px;
    color: white;
  }
  h5 {
    font-size: 24px;
    font-weight: 400;
    margin: 0;
  }
`;

const OutLine = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #717a88;
  margin: 20px 350px 20px;
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  margin: 25px 25px;
`;

function AboutMeContents() {
  return (
    <>
      <AboutMeContentsText>
        <h2>사람을 좋아하며, 커뮤니케이션을 즐기는 개발자</h2>
        <h5>'박동한' 에 대한 4가지 Key word</h5>
        <OutLine>
          <Image src={Donghan} />
          <Keyword icon="Keyword A" position="A" align="right">
            <b>성실과 책임감</b>
            <br />
            임원 수행직 및 현금 보안호송직의 경험을
            <br />
            바탕으로 사회생활에서 제일 중요한
            <br />
            성실함과 책임감을 익히게 되었습니다
          </Keyword>
          <Keyword icon="Keyword B" position="B" align="left">
            <b>예의와 바른 인성</b>
            <br />
            예의범절을 중요하게 생각하시는
            <br />
            부모님의 교육 및 가정환경으로
            <br />
            저를 가장 잘 표현하는 단어입니다
          </Keyword>
          <Keyword icon="Keyword C" position="C" align="right">
            <b>도전 정신</b>
            <br />
            새로운 것을 익히는데 거부감이 없으며
            <br />
            호기심이 많아 현재 상황에 머무르지 않고
            <br />
            무엇이든 경험 해보는 것을 즐겨합니다
          </Keyword>
          <Keyword icon="Keyword D" position="D" align="left">
            <b>넘치는 인간미</b>
            <br />
            동네강아지 같다는 말을 자주 들을만큼 사람을
            <br />
            좋아하며, 다른 사람의 얘기에 귀 기울여
            <br />
            원만한 소통과 대인관계를 유지합니다
          </Keyword>
        </OutLine>
      </AboutMeContentsText>
    </>
  );
}

export default AboutMeContents;
