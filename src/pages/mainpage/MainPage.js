import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
// css
import "../../styles/star.css";
// components
import CardSlider from "../../components/MainPage/CardSlider";
import GreenButton from "../../components/MainPage/GreenButton";
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

const MainPage = () => {
  return (
    <div>
      <GrayBackground>
        <Wrapper>
          <CardSlider />
          <Circle src={circle} />

          {/* <img src={star1} className="star1" />
          <img src={star2} className="star2" />
          <img src={star3} className="star3" />
          <img src={star4} className="star4" />
          <img src={star5} className="star5" /> */}
        </Wrapper>

        <img src={Re_wha} />
        <Text_P>2022 이화대동제</Text_P>
        <Text_N>
          <p>9.14</p>(수) ~ <p>9.16</p>(금)
        </Text_N>
        <Paper />
      </GrayBackground>

      <Beige>
        <Title src={title} />

        <GreenButton>TF팀 공지 보러가기</GreenButton>
        <GreenButton>부스 보러가기</GreenButton>
        <GreenButton>멋사 보러가기</GreenButton>

        {/* <DayBack>
          <Day>9. 14</Day>
        </DayBack>
        <DayBack>
          <Day>9. 15</Day>
        </DayBack>
        <DayBack>
          <Day>9. 16</Day>
        </DayBack> */}
      </Beige>
    </div>
  );
};

export default MainPage;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid red;
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

  width: 100%;
  height: 774px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text_P = styled.p`
  font-family: var(--ph-font);
  color: var(--text);

  font-weight: 300;
  font-size: 24px;
`;

const Text_N = styled.p`
  display: flex;
  font-family: var(--nanum-font);
  font-size: 16px;
  font-weight: 700;
  color: var(--text);

  p {
    color: var(--green);
  }
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
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.img`
  margin-top: 80px;
`;

const DayBack = styled.div`
  position: relative;
  border: 1px solid red;
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
