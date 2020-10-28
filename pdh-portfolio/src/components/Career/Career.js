import React from 'react';
import styled from 'styled-components';
import CareerComponent from './CareerComponent';

const CareerBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: #5a5f70;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 0;
    margin-bottom: 120px;
  }
  .number {
    color: #959daa;
    margin-right: 15px;
  }
`;

function Career() {
  return (
    <CareerBlock id="career">
      <p>
        <span className="number">04</span>CAREER
      </p>
      <CareerComponent
        position="first"
        align="right"
        title="2012년 3월 ~ 2014년 10월"
        explain="
            (주) BGF캐시넷 현금호송팀장직<br />
            억단위 금액 경비 및 호송<br />
            기업의 입, 출금 수납 업무 대리"
      />
      <CareerComponent
        position="second"
        title="2015년 1월 ~ 2019년 2월"
        explain="
            LG전자 임원수행직<br />
            사내 임원 전담 수행<br />
            회사 업무차량 및 전표 관리"
      />
      <CareerComponent
        position="third"
        align="right"
        title="2019년 12월 ~ 2020년 6월"
        explain="
            IT 전문훈련기관<br />
            KIC 캠퍼스 학원 프론트엔드 백엔드<br />
            양성 과정 수료"
      />
      <CareerComponent
        position="fourth"
        title="2020년 7월 ~ 9월"
        explain="
            (주) 플랫큐브 인턴직<br />
            농립축산부 앱 개발 퍼블리셔 참여 진행"
      />
    </CareerBlock>
  );
}

export default Career;
