import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
// components
import CardSlider from "../../components/MainPage/CardSlider";
import NewButton from "../../components/MainPage/NewButton";
import StarTitle from "../../components/MainPage/StarTitle";
import Footer from "../../components/Footer/Footer";
import TimeLine from "../../components/MainPage/TimeLine";
import Stars from "../../components/MainPage/Stars";
import SideBar from "../../components/SideBar";
import Map from "../../components/MainPage/Map";
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
import circle from "../../images/main/circle.svg";
import likelion from "../../images/main/likelion.svg";
import toplogo from "../../images/main/toplogo.svg";
import person from "../../images/main/person.svg";
import hamburger from "../../images/main/hamburger.svg";

const MainPage = () => {
  const isLogin = localStorage.getItem("token");

  // 사이드바 관리
  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <GrayBackground>
        <TopBar>
          <img
            src={hamburger}
            onClick={() => {
              setSideBar(true);
            }}
          />
          <img src={toplogo} />
          {isLogin ? (
            <Link to="/mypage">
              <img src={person} />
            </Link>
          ) : (
            <Link to="/login">
              <img src={person} />
            </Link>
          )}
        </TopBar>
        {sideBar ? <SideBar setSideBar={setSideBar} /> : null}
        <Wrapper>
          <Stars />
          <CardSlider />
          <Circle src={circle} />
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
          <span style={{ color: "var(--green)" }}>9.14</span>(수) ~
          <span style={{ color: "var(--green)" }}>9.16</span>(금)
        </NanumSquare>

        <Paper />
      </GrayBackground>

      <Beige>
        <Title src={title} />
        <div
          style={{
            width: "268px",
            height: "97px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Pretendard
            color="var(--text)"
            weight="500"
            size="11px"
            height="18px"
          >
            2019년 이후, 3년 만에
            <br />
            대동제를 대면으로 맞이하게 되었습니다.
            <br />
            <br />
            3일 간의 대동제를 통해
            <br />
            <span style={{ color: "green" }}>이화의 초록을</span>
            <br />
            새로이 써 나갈 수 있길 바랍니다.
          </Pretendard>
        </div>

        <Link to="/notice" style={{ textDecoration: "none" }}>
          <NewButton margin="36px auto 59px auto">TF팀 공지 보러가기</NewButton>
        </Link>

        <Map />
        <Link to="/category" style={{ textDecoration: "none" }}>
          <NewButton margin="32px auto 0 auto">부스 보러가기</NewButton>
        </Link>

        <StarTitle margin="132px auto 0 auto" title="일정 소개" />

        <DayBack>
          <Day>9. 14</Day>
        </DayBack>
        <TimeLine title="부스 운영" time="10:00-17:00" />
        <TimeLine
          title="동아리 서브 공연"
          time="3교시~7교시 쉬는 시간 학문관 광장"
        />

        <TimeLine title="벗의 편지" time="11:00 - 14:00 포관20" />
        <TimeLine title="이화인 한솥밥" time="11:30-14:30 학문관 1층" />
        <TimeLine
          title="동아리 스포츠 트랙 공연"
          time="17:00 정문 스포츠 트랙"
        />

        <DayBack>
          <Day>9. 15</Day>
        </DayBack>
        <TimeLine title="부스 운영" time="10:00-16:00" />
        <TimeLine title="동아리 메인 공연" time="12:00-16:00 잔디광장" />
        <TimeLine
          title="동아리 서브 공연"
          time="6교시~7교시 쉬는 시간 학문관 광장"
        />

        <TimeLine title="랜덤 플레이화 댄스" time="17:00-18:00 박물관 앞" />
        <TimeLine
          title="동아리 스포츠 트랙 공연"
          time="18:30 정문 스포츠 트랙"
        />

        <TimeLine title="이화그린 영화제" time="19:00-21:00 잔디광장" />

        <DayBack>
          <Day>9. 16</Day>
        </DayBack>
        <TimeLine title="부스 운영" time="10:00-16:00" />
        <TimeLine
          title="동아리 서브 공연"
          time="3교시~7교시 쉬는 시간 학문관 광장"
        />

        <TimeLine
          title="니가그린그린은이화그린"
          time="16:00-17:30 잔디광장 메인 무대"
        />
        <TimeLine title="동아리 메인 공연" time="12:00-15:00 잔디광장" />

        <TimeLine title="가수 섭외 무대" time="19:00" />

        <StarTitle title="About" margin="130px auto 23px auto" />

        <img src={likelion} />
        <Pretendard
          style={{ textAlign: "center" }}
          weight="500"
          size="10px"
          height="12px"
          color="#585858"
          margin="16px auto 0 auto"
        >
          이화여자대학교 웹 개발 동아리
          <span style={{ color: "#007A28", display: "block" }}>
            " 멋쟁이사자처럼 10기 "
          </span>
          에서 제공하는 2022년 대동제 홈페이지입니다!
        </Pretendard>

        <a
          href="https://www.instagram.com/likelion_ewha/"
          style={{ textDecoration: "none" }}
        >
          <NewButton margin="24px auto 203px auto">멋사 구경하기</NewButton>
        </a>

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

const Wrapper = styled.div`
  //border: 1px red solid;

  margin-top: 53px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 362px;
  width: 375px;

  @media (max-width: 375px) {
    width: 300px;
  }
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
  height: auto;

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

  margin-top: 50px;
  margin-bottom: 13px;
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
