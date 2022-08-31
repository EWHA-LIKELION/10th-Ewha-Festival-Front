import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import TitleBar from "../../components/TitleBar";
import emptysoldout from "../../images/edit/emptysoldout.svg";
import fullsoldout from "../../images/edit/fullsoldout.svg";

import { Pretendard } from "../../components/Text";
import { useNavigate } from "react-router-dom";

const EditMenuDetailPage = () => {
  const [isSoldout, setIsSoldout] = useState(false);
  const [menuName, setMenuName] = useState("기존 메뉴 이름");
  const [menuPrice, setMenuPrice] = useState(3000);

  const navigate = useNavigate();

  const onClickSoldOut = () => {
    setIsSoldout(!isSoldout);
  };

  const handleMenuName = e => {
    setMenuName(e.target.value);
  };

  const handleMenuPrice = e => {
    setMenuPrice(e.target.value);
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
          <Pretendard weight="500" size="16px">
            <Title>메뉴 이름</Title>
          </Pretendard>
          <Input
            type="text"
            value={menuName}
            onChange={handleMenuName}
            style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>가격</Title>
          </Pretendard>
          <PriceWrapper>
            <InputPrice
              type="number"
              value={menuPrice}
              onChange={handleMenuPrice}
              style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
            />
            <Pretendard weight="500" size="16px">
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
          <Button className="Cancel" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button className="Approve">완료</Button>
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
  margin: 30px 30px 210px 30px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  margin-top: 50px;

  .Cancel {
    font-family: "Pretendard-Regular";
    color: "var(--green3)";
  }

  .Approve {
    font-family: "Pretendard-Regular";
    color: var(--white);
    background: linear-gradient(90deg, #004628 0%, #107047 100%);
  }
`;

const Button = styled.button`
  width: 56px;
  height: 28px;
  border: none;
  border-radius: 6px;
  margin: 10px;
`;
