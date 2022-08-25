import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const RegisterModal = props => {
  return (
    <ModalWrapper
      onClick={() => {
        props.setModal(false);
      }}
    >
      <BoxWrapper>
        <ModalBox>
          <div className="top">
            <p>비밀단어 안내</p>
          </div>
          <div className="bottom">
            <p>RE:WHA 입장을 위해서 비밀단어를 입력해주세요.</p>
            <p>이화여자대학교 &gt; 유레카 포털 &gt; 로그인</p>
            <p> &gt; 자유게시판 &gt; ‘RE:WHA’ 검색</p>
            <button
              onClick={() => {
                props.setModal(false);
              }}
            >
              닫기
            </button>
          </div>
        </ModalBox>
      </BoxWrapper>
    </ModalWrapper>
  );
};
export default RegisterModal;

const ModalWrapper = styled.div`
  width: 100%;
  height: 120%;
  padding-bottom: 30%;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 5;

  background: rgba(0, 0, 0, 0.5);

  animation: modal-show 0.5s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -10px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const BoxWrapper = styled.div`
  width: 294px;
  height: 213px;
  margin-top: 261px;
  text-align: center;
`;
const ModalBox = styled.div`
  width: 294px;
  height: 213px;
  .top {
    height: 49px;
    background: #004628;
    border-radius: 8px 8px 0 0;
    padding-top: 15px;

    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }
  .bottom {
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    border-radius: 0 0 8px 8px;
    p:nth-child(1) {
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 10px;
      color: #928d8d;
    }
    p:nth-child(n + 2) {
      line-height: 23px;
      font-weight: 600;
      font-size: 14px;
      color: #000000;
    }
    button {
      cursor: pointer;
      width: 81px;
      height: 24px;
      margin-top: 33px;

      color: #004628;
      border-style: none;
      background: #eaeaea;
      border-radius: 8px;
    }
  }
`;
