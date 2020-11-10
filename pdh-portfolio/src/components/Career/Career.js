import React from 'react';
import styled from 'styled-components';
import CareerComponent from './CareerComponent';
import useScrollHook from '../../hooks/useScrollHook';

const CareerBlock = styled.div`
  width: 100%;
  height: 1000px;
  background: linear-gradient(to bottom, #4e5365, 10%, #5a5f70);
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

const CareerComponentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Career() {
  const animationScroll = useScrollHook();
  const { visible } = animationScroll;
  return (
    <CareerBlock id="career">
      <p>
        <span className="number">04</span>CAREER
      </p>
      <CareerComponentBlock {...animationScroll}>
        <CareerComponent
          visible={visible}
          position="first"
          align="right"
          delay="2"
          title="2012년 3월 ~ 2014년 10월"
          explain="
              (주) BGF캐시넷 현금호송팀장직/n
              억단위 금액 경비 및 호송/n
              기업의 입, 출금 수납 업무 대리"
        />
        <CareerComponent
          visible={visible}
          position="second"
          delay="5"
          title="2015년 1월 ~ 2019년 2월"
          explain="
              LG전자 임원수행직/n
              사내 임원 전담 수행/n
              회사 업무차량 및 전표 관리"
        />
        <CareerComponent
          visible={visible}
          position="third"
          align="right"
          delay="7"
          title="2019년 12월 ~ 2020년 6월"
          explain="
              IT 전문훈련기관/n
              KIC 캠퍼스 프론트엔드 백엔드/n
              양성 과정 수료"
        />
        <CareerComponent
          visible={visible}
          position="fourth"
          delay="10"
          title="2020년 7월 ~ 9월"
          explain="
              (주) 플랫큐브 인턴직/n
              농립축산부 앱 개발 퍼블리셔 참여 진행"
        />
      </CareerComponentBlock>
    </CareerBlock>
  );
}

export default Career;
