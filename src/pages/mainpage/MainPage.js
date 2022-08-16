import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
// css
import "../../styles/star.css";
// components
import CardSlider from "../../components/MainPage/CardSlider";
import GreenButton from "../../components/MainPage/GreenButton";
import StarTitle from "../../components/MainPage/StarTitle";
import Footer from "../../components/Footer/Footer";
import TimeLine from "../../components/MainPage/TimeLine";

import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";
// images
import background from "../../images/main/background.png";
import Re_wha from "../../images/logo/Re_wha.svg";
import paper from "../../images/main/paper.svg";
import title from "../../images/main/title.svg";

import day from "../../images/main/day.svg";

import star1 from "../../images/stars/star1.svg";
import star2 from "../../images/stars/star2.svg";
import star3 from "../../images/stars/star3.svg";
import star4 from "../../images/stars/star4.svg";
import star5 from "../../images/stars/star5.svg";

import circle from "../../images/main/circle.svg";
import map from "../../images/main/map.svg";
import likelion from "../../images/main/likelion.svg";
import toplogo from "../../images/main/toplogo.svg";
import person from "../../images/main/person.svg";
import hamburger from "../../images/main/hamburger.svg";

const MainPage = () => {
  return (
    <div>
      <GrayBackground>
        <TopBar>
          <img src={hamburger} />
          <img src={toplogo} />
          <img src={person} />
        </TopBar>

        <Wrapper>
          <CardSlider />
          <Circle src={circle} />

          {/* <img src={star1} className="star1" />
          <img src={star2} className="star2" />
          <img src={star3} className="star3" />
          <img src={star4} className="star4" />
          <img src={star5} className="star5" /> */}
        </Wrapper>

        <Rewha src={Re_wha} />
        <PyeongChang_Peace
          color="var(--text)"
          weight="300"
          size="24px"
          margin="24px 0 0 0"
        >
          2022 이화대동제
        </PyeongChang_Peace>

        <NanumSquare
          weight="700"
          color=" var(--text)"
          margin="24px 0 0 0 "
          style={{ display: "flex" }}
        >
          <p style={{ color: "var(--green)" }}>9.14</p>(수) ~
          <p style={{ color: "var(--green)" }}>9.16</p>(금)
        </NanumSquare>

        <Paper />
      </GrayBackground>

      <Beige>
        <Title src={title} />
        <div
          style={{ width: "268px", height: "97px", border: "1px solid red" }}
        >
          <Pretendard
            color="var(--text)"
            weight="500"
            size="11px"
            height="18px"
          >
            136년 전 이화는 단 한 명의 학생을 위해 이 땅에서 최초로 여성 교육의
            문을 열었습니다. 기독교 정신의 사랑과 헌신을 바탕으로 우리 사회의
            금기를 깨뜨리며 끊임없이 도전해 온 이화의 하루 하루는 기적의 역사가
            되었습니다. 대동제 기획 소개........
          </Pretendard>
        </div>

        <GreenButton margin="36px auto 0 auto">TF팀 공지 보러가기</GreenButton>

        <StarTitle title="부스 지도" />

        <Map src={map} />

        <GreenButton margin="32px auto 0 auto">부스 보러가기</GreenButton>

        <StarTitle title="일정 소개" />
        <DayBack>
          <Day>9. 14</Day>
        </DayBack>
        <TimeLine title="개막식" time="11:00-12:00" />
        <TimeLine title="동아리 공연" time="11:00-12:00" />
        <TimeLine title="Ewhackers" time="11:00-12:00" />
        <TimeLine title="이화 최고의 마스터셰프" time="11:00-12:00" />
        <DayBack>
          <Day>9. 15</Day>
        </DayBack>
        <TimeLine title="개막식" time="11:00-12:00" />
        <TimeLine title="동아리 공연" time="11:00-12:00" />
        <TimeLine title="Ewhackers" time="11:00-12:00" />
        <TimeLine title="이화 최고의 마스터셰프" time="11:00-12:00" />
        <DayBack>
          <Day>9. 16</Day>
        </DayBack>
        <TimeLine title="개막식" time="11:00-12:00" />
        <TimeLine title="동아리 공연" time="11:00-12:00" />
        <TimeLine title="Ewhackers" time="11:00-12:00" />
        <TimeLine title="이화 최고의 마스터셰프" time="11:00-12:00" />
        <StarTitle title="About" />
        <img src={likelion} />
        <Pretendard
          style={{ textAlign: "center" }}
          weight="500"
          size="10px"
          height="12px"
          color="#585858"
        >
          이화여자대학교 웹 개발 동아리{" "}
          <p style={{ color: "#007A28" }}>멋쟁이사자처럼 10기</p>에서 제공하는
          2022년 대동제 홈페이지입니다!
        </Pretendard>
        <GreenButton>멋사 보러가기</GreenButton>
        <br />
        <Footer />
      </Beige>
    </div>
  );
};

export default MainPage;

const Rewha = styled.img`
  margin-top: 21px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Map = styled.img`
  width: 297px;
  height: 300px;
`;

const Wrapper = styled.div`
  margin-top: 53px;
  position: relative;
  display: flex;
  justify-content: center;
  //border: 1px solid red;
  height: 362px;
  width: 100%;
`;

const Circle = styled.img`
  position: absolute;
  top: 54px;
`;

const GrayBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 47px;

  width: 100%;
  height: 774px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Paper = styled.div`
  position: absolute;
  bottom: -15px;

  width: 100%;
  height: 32px;
  background-image: url(${paper});
`;

const Beige = styled.div`
  background-color: var(--beige);
  height: 3339px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.img`
  margin-top: 80px;
`;

const DayBack = styled.div`
  position: relative;

  background-image: url(${day});
  height: 63px;
  width: 121px;
`;

const Day = styled.p`
  position: absolute;

  top: 23px;
  left: 40px;
  color: var(--ewha-green);

  font-family: Wargika;
  font-weight: 700;
  font-size: 40px;

  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
