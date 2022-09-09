import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import font
import { PyeongChang_Peace } from "../components/Text";

// import image
import { ReactComponent as Backbutton } from "../images/navbar/back.svg";

import hamburger from "../images/main/hamburger.svg";
import SideBar from "../components/SideBar";

const TitleBar = ({ children }) => {
  // 사이드바 관리
  const [sideBar, setSideBar] = useState(false);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <>
      <Background>
        <TopBar>
          <ButtonWrapper>
            <img
              src={hamburger}
              onClick={() => {
                setSideBar(true);
              }}
            />
          </ButtonWrapper>
          <TextWrapper>
            <PyeongChang_Peace weight="700" size="22px">
              {children}
            </PyeongChang_Peace>
          </TextWrapper>
        </TopBar>
        {sideBar ? <SideBar setSideBar={setSideBar} /> : null}
      </Background>
      <hr
        style={{
          marginTop: "16px",
          backgroundColor: "var(--gray)",
          width: "100%",
        }}
      />
    </>
  );
};

export default TitleBar;

const TopBar = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  /* position: absolute;
  z-index: 100; */
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const TextWrapper = styled.div`
  display: inline;
  width: fit-content;
  margin: 0 auto;
  padding-right: 30px;
`;

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: 56px;
`;
