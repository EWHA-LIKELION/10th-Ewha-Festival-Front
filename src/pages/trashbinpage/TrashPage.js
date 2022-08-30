import styled, { css } from "styled-components";
import { useState, useEffect } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";

import Footer from "../../components/Footer/Footer";
import { boothData } from "../../_mock/boothData";
import TitleBar from "../../components/TitleBar";
const TrashPage = () => {
  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>쓰레</span>
        <span style={{ color: "var(--green2)" }}>기통 </span>
        <span style={{ color: "var(--green3)" }}>지도</span>
      </TitleBar>
      <PyeongChang_Peace>다시쓰는</PyeongChang_Peace>
      <PyeongChang_Peace>이화의 초록</PyeongChang_Peace>
      <Footer />
    </>
  );
};

export default TrashPage;
