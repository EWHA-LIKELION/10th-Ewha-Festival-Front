import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import font
import { Pretendard } from "../../components/Text";

// import component
import Footer from "../../components/Footer/Footer";
import EditTitleBar from "../../components/EditMenu/EditTitleBar";

// import api component
import { GetBooth, PatchBooth } from "../../api/booth";
import { useAppSelector } from "../../redux/store";

const EditBoothPage = () => {
  // navigate
  const navigate = useNavigate();

  // boothId 불러오기
  const boothId = useAppSelector(state => state.user.boothId);
  // 기존 부스 정보 불러오기
  useEffect(() => {
    getPrev(boothId);
  }, [boothId]);

  const getPrev = id => {
    GetBooth(id).then(response => {
      console.log(localStorage.getItem("token"));
      setName(response.data.data.name);
      setNotice(response.data.data.notice);
      setDescription(response.data.data.description);
      console.log("[prevdata 조회 성공] : ", response.data);
    });
  };

  // 부스 정보 수정하기
  const onSubmit = () => {
    if (name !== "") {
      PatchBooth(boothId, name, notice, description)
        .then(response =>
          // console.log("[부스 정보 수정 성공]\n\n","부스 이름: ", name, "\n부스 공지: ", notice, "\n부스 소개: ", description),
          console.log(response),
        )
        .catch(error => {
          console.log(error);
        });

      navigate(-1);
    } else {
      alert("부스 이름은 필수 정보입니다");
    }
  };

  // 입력창(input) 관리
  const [name, setName] = useState("");
  const [notice, setNotice] = useState("");
  const [description, setDescription] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };

  const handleNotice = e => {
    setNotice(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <>
      <EditTitleBar>
        <span style={{ color: "var(--green1)" }}>내 </span>
        <span style={{ color: "var(--green2)" }}>부스 </span>
        <span style={{ color: "var(--green3)" }}>정보수정</span>
      </EditTitleBar>
      <ContentWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 이름</Title>
          </Pretendard>
          <Input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="부스 이름"
            style={{
              fontFamily: "Pretendard",
              height: "45px",
              fontSize: "14px",
            }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>공지사항</Title>
          </Pretendard>
          <TextArea
            type="text"
            value={notice}
            onChange={handleNotice}
            placeholder="공지사항"
            style={{ fontFamily: "Pretendard" }}
          />
        </BoxWrapper>
        <BoxWrapper>
          <Pretendard weight="500" size="16px">
            <Title>부스 소개</Title>
          </Pretendard>
          <TextArea
            type="text"
            value={description}
            onChange={handleDescription}
            placeholder="부스 소개"
            style={{ fontFamily: "Pretendard", color: "var(--black)" }}
          />
        </BoxWrapper>
      </ContentWrapper>
      <Pretendard weight="600" size="18x">
        <ButtonWrapper>
          <Button onClick={() => navigate(-1)} className="Cancel">
            취소
          </Button>
          <Button onClick={onSubmit} className="Approve">
            완료
          </Button>
        </ButtonWrapper>
      </Pretendard>
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
  margin: 0 30px 0 30px;
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
  justify-content: flex-end;
  margin: 10px 20px 20px 30px;

  .Cancel {
    font-family: "Pretendard";
    color: var(--green3);
  }

  .Approve {
    font-family: "Pretendard";
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
