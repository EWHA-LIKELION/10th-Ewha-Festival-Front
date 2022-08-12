import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
// css
import "../../styles/star.css";
// components
import { Star } from "../../images/stars/star";
import CardSlider from "../../components/MainPage/CardSlider";
// images
import background from "../../images/main/background.png";
import Re_wha from "../../images/logo/Re_wha.svg";
import paper from "../../images/main/paper.svg";
import title from "../../images/main/title.svg";
import day14 from "../../images/main/day14.svg";
import day15 from "../../images/main/day15.svg";
import day16 from "../../images/main/day16.svg";
import day914 from "../../images/main/914.svg";

const MainPage = () => {
  return (
    <div>
      <GrayBackground>
        <Star></Star>

        <CardSlider />
        <img src={Re_wha} />
        <Text_P>2022 이화대동제</Text_P>
        <Text_N>
          <p>9.14</p>(수) ~ <p>9.16</p>(금)
        </Text_N>
        <Paper />
      </GrayBackground>

      <Beige>
        <Title src={title} />
        <Day src={day14} />
        <Day src={day15} />
        <Day src={day16} />
        <Test>9.14</Test>
      </Beige>
    </div>
  );
};

export default MainPage;

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

const Day = styled.img`
  height: 150px;
`;

const Test = styled.p`
  font-family: wargika;
  font-style: regular;
  font-size: 40px;
`;
