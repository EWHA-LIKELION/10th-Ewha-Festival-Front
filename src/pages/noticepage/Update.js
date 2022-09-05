import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
    PyeongChang_Peace,
    PyeongChang,
    NanumSquare,
    Pretendard,
} from "../../components/Text";
// import { defaultMaxListeners } from "events";

// components
import Footer from "../../components/Footer/Footer";
import UploadButton from "../../components/NoticePage/UploadButton";
import CancelButton from "../../components/NoticePage/CancelButton";
import Modal from "../../components/Modal/Modal";

// images
import leftarrow from "../../images/notice/leftarrow.png";
// import { text } from "body-parser";

const Update = (props) => {
    // 모달 컴포넌트
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const getNotice = async () => {
        const response = await axios.get(`http://43.200.53.202/notices/${id}`);
        console.log(response.data);
        console.log(response.data.data.title);
        console.log(response.data.data.content);
    };
    
    const editNotice = async () => {
    const response = await axios
        .patch(`http://43.200.53.202/notices/${id}`, {
        title: title,
        content: content,
        })
        .then(console.log(response.data.json))
        .catch(console.log("실패"));
    };

    const [title, setTitle] = useState("기존 제목");
    const [content, setContent] = useState("기존 내용");

    var id = 1;

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
            <TopBar>
                <img 
                src={ leftarrow } 
                height="17px"
                />
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
            </TopBar>
            <CreateSpace>
                <Title>
                    <Input
                    type='text' 
                    placeholder="제목을 작성하세요."
                    value={title}
                    onChange={handleTitle}
                    />
                </Title>
                <Content>
                    <Textarea 
                    placeholder="내용을 작성하세요."
                    value={content}
                    onChange={handleContent}
                    type='text'
                    ></Textarea>
                </Content>
            </CreateSpace>
            <Upload>
                <CancelStyle>
                    <CancelButton onClick={openModal}>취소</CancelButton>
                </CancelStyle>
                <UploadStyle>
                    <UploadButton>등록</UploadButton>
                </UploadStyle>
            </Upload>
            <Modal open={modalOpen} close={closeModal} header="공지 작성 취소">
                <div className="warning">
                    작성 취소된 글은 저장되지 않습니다.
                </div>
                <div className="asking">
                    공지 글 수정을 취소하시겠습니까?
                </div>
            </Modal>
            <Footer></Footer>
        </>
    );
};

export default Update;

const TopBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EAEAEA;
`;

// const BackButton = styled.img`
//     position: relative;
//     margin-top: 10px;
// `

const CreateSpace = styled.div`
    width: 335px;
    margin: 0 auto;
    border-bottom: 1px solid #EAEAEA;
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
    };
    width: 87%;
    margin: 0 auto;
    border: none;
    width: 307px;
    font-family: var(--pre-font);
    font-weight: 400;
`
    
const Upload = styled.div`
    justify-content: flex-end;
    width: fit-content;
    margin-top: 16px;
    margin-bottom: 50px;
    margin-left: 10px
    position: relative;
    display: flex;
`

const UploadStyle = styled.button`
    position: absolute;
    left: 300px;
    border: 0;
    outline: 0;
    background-color: transparent;
`
const CancelStyle = styled.button`
    position: absolute;
    left: 234px;
    border: 0;
    outline: 0;
    background-color: transparent;
`