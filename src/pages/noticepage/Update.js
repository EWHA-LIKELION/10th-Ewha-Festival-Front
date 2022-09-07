import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import Footer from "../../components/Footer/Footer";
import UploadButton from "../../components/NoticePage/UploadButton";
import CancelButton from "../../components/NoticePage/CancelButton";
import Modal from "../../components/Modal/Modal";
import TitleBar from "../../components/TitleBar";
import http from "../../api/http";
import TfService from "../../api/services/tfservice";
import { noticeData } from "../../_mock/noticeData";



const Update = () => {
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

  const [notice, setNotice] = useState({});
  // 기존 공지사항 불러오기
    useEffect(() => {
      getNotice(id)
      .then(res => {
        setNotice(res.data.data);
      })
      .catch(error => console.log(error));
    })
  
  // 공지사항 수정
  useEffect(() => {
    putNotice()
    .then(res => {
      
    })
  })
    
    
    const editNotice = async () => {
      const response = await axios
      .put(`https://api.rewha2022.com/notices/{$id}`, {
        title: title,
        content: content,
      })
      .then(console.log(response.data.json))
      .catch(console.log("실패"));
    };
    
    const [title, setTitle] = useState({});
    const [content, setContent] = useState({});

    const handleTitle = e => {
    setTitle(e.target.value);
    console.log(title);
    };

    const handleContent = e => {
    setContent(e.target.value);
    console.log(content);
    };

    const onSubmit = () => {
    editNotice();
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
                    <span style={{color: "#00A428"}}>공</span>
                    <span style={{color: "#007A28"}}>지 </span>
                    <span style={{color: "##004628"}}>수정하기</span>
                </PyeongChang_Peace>
                <div color="#ffffff">

                </div>
            </TitleBar>
                <Title>
                    <Input
                    type='text' 
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
                    type='text'
                    ></Textarea>
                </Content>
            <Upload>
                <CancelButton onClick={openModal}>취소</CancelButton>
                <UploadButton type="submit" onClick={editNotice}>등록</UploadButton>
            </Upload>
            <Modal 
            open={modalOpen} 
            close={closeModal} 
            header="공지 수정 취소"
            subtext="작성 취소된 글은 저장되지 않습니다."
            maintext="공지 글 수정을 취소하겠습니까?"
            >
            </Modal>
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