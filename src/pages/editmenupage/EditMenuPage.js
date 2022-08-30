import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "../../components/EditMenu/MenuItem";
import Footer from "../../components/Footer/Footer";
import { Pretendard } from "../../components/Text";
import TitleBar from "../../components/TitleBar";

const EditMenuPage = () => {
  const [item, setItem] = useState(null);

  const onSubmit = () => {
    console.log("제출 " + item);
    navigate(`/editmenu/:${item}`);
  };

  const navigate = useNavigate();

  return (
    <>
      <TitleBar>
        <span style={{ color: "var(--green1)" }}>메뉴 </span>
        <span style={{ color: "var(--green2)" }}>정보 </span>
        <span style={{ color: "var(--green3)" }}>수정</span>
      </TitleBar>
      <br />
      <ContentWrapper>
        <Pretendard color="var(--green3)" weight="500" size="14px">
          <span>수정할 메뉴를 선택하세요</span>
        </Pretendard>
        <MenuItem setItem={setItem} />
        <Pretendard color="var(--white)" weight="500" size="16px">
          <Button onClick={onSubmit}>수정하기</Button>
        </Pretendard>
      </ContentWrapper>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default EditMenuPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  padding: 12px;
  background-color: var(--green3);
`;
