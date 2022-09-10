import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// components
import Footer from "../../components/Footer/Footer";
import UploadButton from "../../components/NoticePage/UploadButton";
import CancelButton from "../../components/NoticePage/CancelButton";
import Modal from "../../components/Modal/Modal";
import TitleBar from "../../components/TitleBar";
import { http } from "../../api/http";
import TfService from "../../api/services/tfservice";
import { GetNotice, submitNotice, PatchNotice } from "../../api/tf";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { setPage } from "../../redux/pageSlice";
import { noticeReducer, setNotice } from "../../redux/noticeSlice";

const Update = () => {
  const preTitle = useAppSelector(state => state.notice.title);
  const id = useAppSelector(state => state.notice.id);
  const preContent = useAppSelector(state => state.notice.content);

  // 모달 컴포넌트
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 취소 버튼 누를 시 이동
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const [title, setTitle] = useState(preTitle);
  const [content, setContent] = useState(preContent);

  // 기존 부스 정보 불러오기
  useEffect(() => {
    GetNotice(id)
      .then(res => {
        console.log("공지 상세 조회 성공", res);
      })
      .catch(err => {
        console.log("공지 상세 조회 실패", err);
      });
  }, []);

  // 공지사항 수정 요청
  const editNotice = e => {
    e.preventDefault();

    PatchNotice(id, title, content)
      .then(res => {
        console.log(res);
        navigate(`/notice/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleContent = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <TitleBar>
        <PyeongChang_Peace
          size="22px"
          weight="700"
          height="29px"
          letter-spacing="0em"
        >
          <span style={{ color: "#00A428" }}>공</span>
          <span style={{ color: "#007A28" }}>지 </span>
          <span style={{ color: "##004628" }}>수정하기</span>
        </PyeongChang_Peace>
      </TitleBar>
      <Title>
        <Input
          type="text"
          placeholder="제목을 작성하세요."
          value={title}
          onChange={handleTitle}
        />
      </Title>
      <Line />
      <Content>
        <Textarea
          placeholder="내용을 작성하세요."
          value={content}
          onChange={handleContent}
          type="text"
        ></Textarea>
      </Content>
      <Upload>
        <CancelButton onClick={openModal}>취소</CancelButton>
        <UploadButton type="submit" onClick={editNotice}>
          등록
        </UploadButton>
      </Upload>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="공지 수정 취소"
        subtext="작성 취소된 글은 저장되지 않습니다."
        maintext="공지 글 수정을 취소하겠습니까?"
        onClick={handleBackButton}
      ></Modal>
      <Footer></Footer>
    </>
  );
};

export default Update;

const Title = styled.div`
  margin: 8% 10% 0;
  justify-content: left;
  width: 80%;
  height: 40px;
  border: none;
  font-size: 20px;
`;

const Line = styled.div`
  border: 1px solid var(--gray);
  width: 85%;
  margin: 0 auto;
`;

const Input = styled.input`
  ::placeholder {
    font-family: var(--pre-font);
    color: var(--gray2);
  }
  width: 100%;
  border: none;
  font-size: 20px;
  font-family: var(--pre-font);
  font-weight: 400;
`;

const Content = styled.div`
  display: flex;
  // justify-content: left;
  width: 90%;
  height: 264px;
  border: none;
  font-size: 22px;
  margin: 24px auto;
`;

const Textarea = styled.textarea`
  ::placeholder {
    font-family: var(--pre-font);
    font-weight: 400;
    color: var(--gray2);
  }
  width: 90%;
  justify-content: left;
  margin: 0 auto;
  border: none;
  font-family: var(--pre-font);
  font-weight: 400;
`;

const Upload = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 10%;
`;
