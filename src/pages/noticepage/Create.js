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

// images
import leftarrow from "../../images/notice/leftarrow.png";
// import { text } from "body-parser";

const Create = () => {
    return (
        <>
            <TopBar>
                <img left="10px" src="{leftarrow}" />
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
            </TopBar>
            <CreateSpace>
                <Title>
                    <input
                    type='text' 
                    placeholder="제목을 작성하세요."
                    />
                </Title>
                <Content>
                    <textarea placeholder="내용을 작성하세요."></textarea>
                </Content>
            </CreateSpace>
            <Upload>
                    <CancelButton>취소</CancelButton>
                    <UploadButton>등록</UploadButton>
            </Upload>
            <Footer></Footer>
        </>
    );
};

export default Create;

const TopBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EAEAEA;
`;

const CreateSpace = styled.div`
    // display: flex;
    width: 100%;
    border-bottom: 1px solid #EAEAEA;
`;

const Title = styled.div`
    display: flex;
    justify-content: left;
    width: 87%;
    height: 22px;
    margin-top: 24px;
    border: none;
    font-size: 22px;
`;

const Content = styled.div`
display: flex;
justify-content: left;
    width: 335px;
    margin-bottom: 16px;
    `;
    
    const Upload = styled.div`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 26px;
    // margin-left: 1000px;
    position: relative;
`
