import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useHistory, useParams, useLocation } from "react-router-dom";
import App from "../../App";

//_mock 더미데이터
import { noticeData } from "../../_mock/noticeData";

// components
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer/Footer";
import GreenButton from "../../components/MainPage/GreenButton";

import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";

export function NoticeDetailPage() {
  const location = useLocation();
  const notice = location.state.notice;

  return (
    <>
      <Pretendard>
        <TitleBar>
          <span style={{ color: "var(--green1)" }}>공</span>
          <span style={{ color: "var(--green2)" }}>지</span>
          <span style={{ color: "var(--green3)" }}>사항</span>
        </TitleBar>
        <NoticeTitle>
          <p class="title">{notice.title}</p>
        </NoticeTitle>
        <Line />
        <NoticeInfo>
          <div style={{ display: "flex", float: "left" }}>
            <p class="writer">{notice.writer}</p>
          </div>
          <div style={{ display: "flex", float: "right" }}>
            <p class="date">{notice.date}</p>
            <p class="time">{notice.time}</p>
          </div>
        </NoticeInfo>
        <NoticeContent>
          <p class="content">{notice.content}</p>
        </NoticeContent>
        <Line style={{ marginBottom: "5%" }} />
      </Pretendard>
      {/* 권한에 따라 나타났다 없어졌다 하는 부분 ~ */}
      <ButtonBox>
        <GrayBtn>삭제</GrayBtn>
        <GreenBtn>수정</GreenBtn>
      </ButtonBox>
      {/* ~ */}
      <Footer />
    </>
  );
}

const NoticeTitle = styled.div`
  margin: 8% 10% 3%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: justify;
`;
const NoticeInfo = styled.div`
  box-sizing: border-box;
  height: 10px;
  margin: 3% 10% 6%;
  font-family: "Pretendard";
  color: var(--gray2);
  font-weight: 300;
  font-size: 12px;
  p {
    margin-right: 10px;
  }
`;
const NoticeContent = styled.div`
  margin: 0 10% 5%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
  line-height: 22px;
`;
const Line = styled.div`
  border: 1px solid var(--gray);
  width: 85%;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-bottom: 10%;
`;
const GrayBtn = styled.button`
  margin-right: 3%;
  box-sizing: border-box;
  margin-left: auto;
  color: var(--green3);
  font-family: "Pretendard";
  font-size: 14px;
  padding: 10px 22px;
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  background: var(--gray);
`;
const GreenBtn = styled.button`
  margin-right: 7%;
  color: var(--white);
  font-family: "Pretendard";
  font-size: 14px;
  padding: 10px 22px;
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    to right,
    rgba(0, 70, 40, 1),
    rgba(16, 112, 71, 1)
  );
`;

export default NoticeDetailPage;
