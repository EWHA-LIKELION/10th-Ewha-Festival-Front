import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
    PyeongChang_Peace,
    PyeongChang,
    NanumSquare,
    Pretendard,
} from "../../components/Text";
import { defaultMaxListeners } from "events";

// components
import Footer from "../../components/Footer/Footer";

// images
import leftarrow from "../../images/notice/leftarrow.png";

const Update = () => {
    return (
        <>
            <TopBar>
                <img left="10px" src="{ leftarrow }"/>
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
                    <input type='text' placeholder="제목을 작성하세요."/>
                </Title>
                
                    <textarea placeholder="내용을 작성하세요."></textarea>
            </CreateSpace>
            <Upload>

            </Upload>
            <Footer></Footer>
        </>
    );
};

export default Update;

const TopBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 24px;
    border-bottom: 1px solid #EAEAEA;
    border-bottom-width: 100%
`;

const CreateSpace = styled.div`
    // display: flex;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Upload = styled.div`
    width: 100%;
`
