import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

// import font
import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";

import TitleBar from "../../components/TitleBar";

const EditBoothPage = () => {
  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>내 </span>
        <span style={{ color: "var(--green2)" }}>부스 </span>
        <span style={{ color: "var(--green3)" }}>정보수정</span>
      </TitleBar>
      <ContentWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 이름</Title>
          </Pretendard>
          <Input
            placeholder="기존 부스 이름"
            style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>공지사항</Title>
          </Pretendard>
          <TextArea
            style={{ fontFamily: "Pretendard-Regular" }}
            placeholder="기존 공지사항"
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 소개</Title>
          </Pretendard>
          <TextArea
            style={{ fontFamily: "Pretendard-Regular", color: "var(--black)" }}
            placeholder="기존 소개"
          />
        </BoxWrapper>
      </ContentWrapper>

      <Pretendard weight="600" size="18x">
        <ButtonWrapper>
          <Button style={{ background: "var(--gray)", color: "var(--green3)" }}>
            취소
          </Button>
          <Button
            style={{ background: "var(--green3)", color: "var(--white)" }}
          >
            완료
          </Button>
        </ButtonWrapper>
      </Pretendard>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default EditBoothPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0 30 0 30;
`;

const BoxWrapper = styled.div`
  border: none;
  width: 100%;
  padding: 12px;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
`;

const Button = styled.div`
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 8px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
