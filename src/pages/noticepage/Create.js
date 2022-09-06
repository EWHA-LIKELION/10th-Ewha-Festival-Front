import React, { useEffect, useState } from "react";
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
// import http from "../../api/http";

// images
import leftarrow from "../../images/notice/leftarrow.png";
import { Value } from "sass";
import GrayButton from "../../components/Modal/GrayButton";
import GreenButton from "../../components/MainPage/GreenButton";
import { http } from "../../api/http";
// import { text } from "body-parser";

const Create = () => {
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
    // 글 직성
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    
    
    // fetch
    const postNotice = () => {
        
        const url = 'https://api.rewha2022.com/notices/'
        const option = {
            method:'POST',
            header: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title:title,
                content:content
            })
            
        }
        fetch(url, option)
        .then(response => console.log(response));
    }

    // axios
    // const postNotice = async(e) => {
    //     const notice = {
    //         title: title,
    //         body: content,
    //     };
    //     const headers = { 
    //         'Content-Type': 'application/json'
    //     };
    //     try {
    //         const response = await axios.post(
    //             'https://api.rewha2022.com/notices/',
    //             notice
    //         );
    //         console.log(response.notice);
    //     } catch (e) {
    //         console.log("something went wrong!",e);
                
    //         }
    //     }

    useEffect(() => {
        http
        .post("/notices/")
        .then(response => {
            // console.log(response.noticeData);
            postNotice();
        })
        .catch(error => console.log(error));

    }, []);


    // var id = 1;

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
                        <span style={{color: "##004628"}}>작성하기</span>
                    </PyeongChang_Peace>
                    <div color="#ffffff">
        
                    </div>
                </TitleBar>
                <CreateSpace>
                    <Title>
                        <Input
                        type='text' 
                        placeholder="제목을 작성하세요."
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        ></Input>
                    </Title>
                    <Content>
                        <Textarea 
                        placeholder="내용을 작성하세요." 
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                        type='text'
                        >
                        </Textarea>
                    </Content>
                </CreateSpace>
                <Upload>
                    <CancelStyle>
                        <CancelButton onClick={openModal}>취소</CancelButton>
                    </CancelStyle>
                    <UploadStyle>
                        <UploadButton type="submit" onClick={postNotice}>등록</UploadButton>
                    </UploadStyle>
                </Upload>
                <Modal 
                open={modalOpen} 
                close={closeModal} 
                header="공지 작성 취소"
                subtext="작성 취소된 글은 저장되지 않습니다."
                maintext="공지 글 작성을 취소하겠습니까?"
                >
                </Modal>
                <Footer></Footer>
            </>
        );
    }



export default Create;

const TopBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #eaeaea;
`;

// const BackButton = styled.img`
//     position: relative;
//     margin-top: 10px;
// `

const CreateSpace = styled.div`
  width: 335px;
  margin: 0 auto;
  border-bottom: 1px solid #eaeaea;
`;

const Title = styled.div`
    display: flex;
    justify-content: left;
    width: 335px;
    height: 40px;
    border: none;
    font-size: 22px;
    margin: 24px auto;
    border-bottom: solid 1px #eaeaea;
`;

const Input = styled.input`
    ::placeholder {
        font-family: var(--pre-font);
        color: var(--gray2);
    }
    width: 335px;
    border: none;
    font-size: 18px;
    margin-left: 15px;
    font-family: var(--pre-font);
    font-weight: 400;
`;

const Content = styled.div`
    display: flex;
    justify-content: left;
    width: 340px;
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
    width: 87%;
    margin: 0 auto;
    border: none;
    width: 307px;
    font-family: var(--pre-font);
    font-weight: 400;
`;

const Upload = styled.div`
    justify-content: flex-end;
    width: fit-content;
    margin-top: 16px;
    margin-bottom: 50px;
    margin-left: 10px;
    position: relative;
    display: flex;
`;

const UploadStyle = styled.button`
    position: absolute;
    left: 300px;
    border: 0;
    outline: 0;
    background-color: transparent;
`;
const CancelStyle = styled.button`
    position: absolute;
    left: 234px;
    border: 0;
    outline: 0;
    background-color: transparent;
`
