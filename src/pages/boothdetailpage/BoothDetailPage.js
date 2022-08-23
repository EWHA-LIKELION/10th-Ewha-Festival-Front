import styled, { css } from "styled-components";
import { useState } from "react";

import { PyeongChang_Peace, Pretendard } from "../../components/Text";
import LocationBtn from "../../components/Category/LocationBtn";
import Footer from "../../components/Footer/Footer";

import back from "../../images/navbar/back.svg";

import { useEffect } from "react";

const BoothDetailPage = () => {
  return (
    <>
      <Wrapper>
        <Image />
        <BackBtn>
          <Back src={back} />
        </BackBtn>

        <PyeongChang_Peace size="22px" weight="700" color="var(--green3)">
          부스 이름 이름
        </PyeongChang_Peace>

        <div style={{ height: "500px" }} />
        <Footer />
      </Wrapper>
    </>
  );
};

export default BoothDetailPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 47px;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;
`;

const Back = styled.img`
  width: 10px;
  height: 17px;
  margin-right: 3px;
`;

const BackBtn = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--white);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
`;
