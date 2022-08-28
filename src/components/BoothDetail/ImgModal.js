import React from "react";
import styled from "styled-components";
import imgmodalclose from "../../images/detail/imgmodalclose.svg";

const MenuImgModal = ({ src, closeModal, ...rest }) => {
  return (
    <Container>
      <Background onClick={() => closeModal()} />
      <Block>
        <Img src={src} />
        <Close src={imgmodalclose} onClick={() => closeModal()} />
      </Block>
    </Container>
  );
};

export default MenuImgModal;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media all and (min-width: 1200px) {
    justify-content: center;
  }
  @media (orientation: landscape) {
    justify-content: center;
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Block = styled.div`
  z-index: 200;
  width: 100%;
  height: auto;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @media all and (min-width: 1200px) {
    width: auto;
    height: 100vh;
  }
  @media (orientation: landscape) {
    width: auto;
    height: 100vh;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  @media all and (min-width: 768px) {
    //태블릿
  }
  @media all and (min-width: 1200px) {
  }
  @media (orientation: landscape) {
    width: auto;
    height: 100vh;
  }
`;

const Close = styled.img`
  position: absolute;
  margin-top: 20px;
  right: 20px;
`;
