import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  PyeongChang_Peace,
  PyeongChang,
  NanumSquare,
  Pretendard,
} from "../../components/Text";
import GrayButton from "../Modal/GrayButton";
import GreenButton from "../Modal/GreenButton";
import "./Modal.css";

const Modal = props => {
  const { open, close, header } = props;
  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>{header}</header>
            <main>{props.children}</main>
            <footer>
              <Cancel>
                <GrayButton onClick={close}>취소</GrayButton>
              </Cancel>
              <Upload>
                <GreenButton onClick={close}>확인</GreenButton>
              </Upload>
            </footer>
          </section>
        ) : null}
      </div>
    </>
  );
};

// 모달창 띄울 페이지 js return() 안에 이 코드 넣으세용
{
  /* <Modal open={modalOpen} close={closeModal} header="모달 제목">
    모달 팝업창입니다. 내용을 입력하세요.
</Modal> */
}

export default Modal;

const Cancel = styled.button`
  position: relative;
  left: -170px;
  margin-top: 7px;
  margin-bottom: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const Upload = styled.button`
  position: absolute;
  margin-left: -160px;
  margin-top: 7px;
  margin-bottom: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
`;
