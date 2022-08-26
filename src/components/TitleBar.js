import React from "react";
import styled from "styled-components";

// import font
import { PyeongChang_Peace } from "../components/Text";

// import image
import { ReactComponent as Backbutton } from "../images/navbar/back.svg";

const TitleBar = ({ children }) => {
  return (
    <>
      <Background>
        <TopBar>
          <ButtonWrapper>
            <Backbutton></Backbutton>
          </ButtonWrapper>
          <TextWrapper>
            <PyeongChang_Peace weight="700" size="22px">
              {children}
            </PyeongChang_Peace>
          </TextWrapper>
        </TopBar>
      </Background>
      <hr
        style={{ marginTop: "16px", backgroundColor: "#EAEAEA", width: "100%" }}
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
  margin-left: 16px;
`;

const TextWrapper = styled.div`
  display: inline;
  width: fit-content;
  margin: 0 auto;
  padding-right: 16px;
`;

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 47px;
  width: 100%;
`;
