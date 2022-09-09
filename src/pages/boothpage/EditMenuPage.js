import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import font
import { Pretendard } from "../../components/Text";

// import component
import MenuItem from "../../components/EditMenu/MenuItem";
import Footer from "../../components/Footer/Footer";
import EditTitleBar from "../../components/EditMenu/EditTitleBar";

const EditMenuPage = () => {
  // navigate
  const navigate = useNavigate();

  // chilren에서 받아올 menu id 상태관리
  const [item, setItem] = useState(null);

  // 수정하기 버튼 클릭시 detailpage로 navigate
  const onSubmit = () => {
    if (item !== null) {
      navigate(`/editmenu/${item}`);
      setItem(null);
    } else {
      alert("수정할 메뉴를 선택하세요");
    }
  };

  return (
    <>
      <EditTitleBar>
        <span style={{ color: "var(--green1)" }}>메뉴 </span>
        <span style={{ color: "var(--green2)" }}>정보 </span>
        <span style={{ color: "var(--green3)" }}>수정</span>
      </EditTitleBar>
      <br />
      <ContentWrapper>
        <Pretendard color="var(--green3)" weight="400" size="14px">
          <span>수정할 메뉴를 선택하세요</span>
        </Pretendard>
        <MenuItem setItem={setItem} />
        <Pretendard color="var(--white)" weight="600" size="16px">
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
  background: linear-gradient(90deg, #004628 0%, #107047 100%);
`;
