import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import TitleBar from "../../components/TitleBar";
import emptysoldout from "../../images/edit/emptysoldout.svg";
import fullsoldout from "../../images/edit/fullsoldout.svg";

import { Pretendard } from "../../components/Text";
import { useNavigate } from "react-router-dom";

const EditMenuDetailPage = () => {
  const navigate = useNavigate();

  const [isSoldout, setIsSoldout] = useState(false);

  const onClickSoldOut = () => {
    setIsSoldout(!isSoldout);
  };

  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>메뉴 </span>
        <span style={{ color: "var(--green2)" }}>정보 </span>
        <span style={{ color: "var(--green3)" }}>수정</span>
      </TitleBar>
      <ContentWrapper>
        <BoxWrapper>
          <Pretendard weight="600" size="16px">
            <Title>메뉴 이름</Title>
          </Pretendard>
          <Input
            type="text"
            style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="600" size="16px">
            <Title>가격</Title>
          </Pretendard>
          <PriceWrapper>
            <InputPrice
              type="number"
              style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
            />
            <Pretendard weight="600" size="16px">
              <div>원</div>
            </Pretendard>
            <Soldout>
              <Text>sold out</Text>
              {isSoldout ? (
                <Icon src={fullsoldout} onClick={onClickSoldOut} />
              ) : (
                <Icon src={emptysoldout} onClick={onClickSoldOut} />
              )}
            </Soldout>
          </PriceWrapper>
        </BoxWrapper>
        <ButtonWrapper>
          <Button
            style={{ fontFamily: "Pretendard-Regular", color: "var(--green3)" }}
          >
            취소
          </Button>
          <Button
            style={{
              fontFamily: "Pretendard-Regular",
              color: "var(--white)",
              backgroundColor: "var(--green3)",
            }}
          >
            완료
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default EditMenuDetailPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 30px 180px 30px;
`;

const BoxWrapper = styled.div`
  border: none;
  width: 100%;
  padding: 12px 0 12px 0;
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

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputPrice = styled.input`
  width: 57%;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: var(--gray0);
  padding: 10px;
  font-size: 18px;
  text-align: right;
`;

const Soldout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--orange);
  font-weight: 600;
  margin-right: 6px;
`;

const Icon = styled.img`
  margin-left: 4px;
  width: 22px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 80px;
`;

const Button = styled.button`
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 6px;
  margin: 10px;
`;
