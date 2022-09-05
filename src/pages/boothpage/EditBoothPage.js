import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import font
import { Pretendard } from "../../components/Text";

// import component
import Footer from "../../components/Footer/Footer";
import TitleBar from "../../components/TitleBar";

// import api component
import { GetBooth, PatchBooth } from "../../api/booth";
import { http } from "../../api/http";

const EditBoothPage = () => {
  // navigate
  const navigate = useNavigate();

  // user의 부스 ID
  const [id, setId] = useState(null);

  // user account 불러오기
  useEffect(() => {
    http
      .get("/accounts/")
      .then(response => {
        setId(response.data.data.booth_id);
        console.log("[프로필 접근 성공] : " + response.data.message);
      })
      .catch(error => console.log("[프로필 접근 실패]" + error));
  }, []);

  // 기존 부스 정보 불러오기
  useEffect(() => {
    if (id !== null) {
      getPrev(id);
    }
  }, [id]);

  const getPrev = () => {
    GetBooth(id).then(response => {
      setName(response.data.data.name);
      setNotice(response.data.data.notice);
      setDescription(response.data.data.description);
      console.log("[prevdata 조회 성공] : " + response.data.message);
    });
  };

  // 부스 정보 수정하기
  const onSubmit = () => {
    if (name !== "") {
      PatchBooth(id, name, notice, description)
        .then(
          console.log(
            "[부스 정보 수정 성공]\n\n" +
              "부스이름: " +
              name +
              "\n부스공지: " +
              notice +
              "\n부스내용:" +
              description,
          ),
        )
        .catch(error => {
          console.log(error);
        });

      navigate(-1);
    } else {
      alert("부스 이름은 필수 정보입니다");
    }
  };

  // 각각의 상태 관리
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
            type="text"
            value={name}
            onChange={handleName}
            placeholder="부스 이름"
            style={{ fontFamily: "Pretendard-Regular", height: "45px" }}
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
            style={{ fontFamily: "Pretendard-Regular" }}
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
            style={{ fontFamily: "Pretendard-Regular", color: "var(--black)" }}
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
