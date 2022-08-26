import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { noticeData } from "../../_mock/noticeData";

// components
import CardSlider from "../../components/MainPage/CardSlider";
import GreenButton from "../../components/MainPage/GreenButton";
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer/Footer";

import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";

// image
import star3 from "../../images/stars/star3.svg";

export function NoticePage() {
  const [notices, setNotices] = useState(noticeData);

  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>공</span>
        <span style={{ color: "var(--green2)" }}>지</span>
        <span style={{ color: "var(--green3)" }}>사항</span>
      </TitleBar>
      <SubTitleBox>
        <img src={star3} />
        <PyeongChang
          color="var(--orange)"
          weight="700"
          size="15px"
          style={{ margin: "4px 8px" }}
        >
          NOTICE
        </PyeongChang>
        <img src={star3} />
      </SubTitleBox>
      <Line />
      {notices.map(notice => {
        return (
          <>
            <NoticeBox key={notice.id}>
              <p class="title">{notice.title}</p>
              <NoticeInfo>
                <p class="writer">{notice.writer}</p>
                <p class="date">{notice.date}</p>
                <p class="time">{notice.time}</p>
              </NoticeInfo>
            </NoticeBox>
            <Line />
          </>
        );
      })}

      <div style={{ margin: "100px" }} />

      <Footer />
    </>
  );
}

const SubTitleBox = styled.div`
  display: flex;
  width: 103px;
  box-sizing: border-box;
  margin: 20px auto;
`;

const Line = styled.hr`
  border: 1px solid var(--gray);
  width: 85%;
  margin: 0 auto;
`;

const NoticeBox = styled.div`
  width: 80%;
  box-sizing: border-box;
  margin: 5% auto;
  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
`;
const NoticeInfo = styled.div`
  display: flex;
  color: var(--gray2);
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    margin-right: 3%;
  }
`;

export default NoticePage;
