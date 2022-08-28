import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
//images
import title from "../../images/main/title.svg";
import { FiUser } from "react-icons/fi";
import lockIcon from "../../images/signup/lockIcon.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";
import flowerIcon from "../../images/signup/flowerIcon.svg";
import keyIcon from "../../images/signup/keyIcon.svg";
import { AiFillInfoCircle } from "react-icons/ai";
//모달창
import RegisterModal from "../../components/Register/RegisterModal";

const RegisterPage = () => {
  //입력 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [secreteWord, setSecreteWord] = useState("");

  //비밀번호 체크 아이콘 색상 관리
  const [checkColor, setCheckColor] = useState("#EAEAEA");

  //모달창 관리
  const [modal, setModal] = useState(false);

  //회원가입 정보 전달
  const Register = e => {
    e.prevent.default();
    //----------api 연결 부분----------
    // if (CheckInputs()) {
    //   axios
    //     .post("api주소", {
    //       ID: id,
    //       PW: password,
    //       name: name,
    //     })
    //     .then(res => {
    //       alert(res.data.message);
    //       Navigate("/다음페이지");
    //     })
    //     .catch(res => {
    //       alert(res.data.message);
    //     });
    // } else {
    //     alert("회원가입에 필요한 모든 정보를 입력해주세요.");
    // }
  };

  //동일한 비밀번호 입력시 색 변경 함수
  const ChangeBtn = () => {
    password === password2 && password !== ""
      ? setCheckColor("#007A28")
      : setCheckColor("#EAEAEA");
  };

  //회원가입에 필요한 정보를 전부 입력한 경우 true를 반환하는 함수
  const CheckInputs = () => {
    if (
      id !== " " &&
      password !== "" &&
      name !== "" &&
      secreteWord === "비밀단어"
    )
      return true;
    else return false;
  };

  return (
    <>
      {modal ? <RegisterModal setModal={setModal} /> : null}
      <RegisterWrapper onSubmit={Register}>
        <Title src={title} />
        <RegisterForm>
          <InputWrapper>
            <IdWrapper>
              <FiUser className="idIcon" />
              <input
                value={id}
                placeholder="아이디"
                onChange={e => setId(e.target.value)}
              />
            </IdWrapper>
            <PwWrapper>
              <img src={lockIcon} />
              <input
                value={password}
                className="PW"
                placeholder="비밀번호"
                type="password"
                onChange={e => setPassword(e.target.value)}
                onKeyUp={ChangeBtn}
              />
            </PwWrapper>
            <PwWrapper>
              <img src={lockIcon} />
              <input
                value={password2}
                className="PW2"
                placeholder="비밀번호 확인"
                type="password"
                onChange={e => setPassword2(e.target.value)}
                onKeyUp={ChangeBtn}
              />
              <IoMdCheckmarkCircle
                style={{
                  width: "16px",
                  marginLeft: "16px",
                  color: checkColor,
                }}
              />
            </PwWrapper>
            <NameWrapper>
              <img src={flowerIcon} />
              <input
                value={name}
                placeholder="닉네임"
                onChange={e => setName(e.target.value)}
              />
            </NameWrapper>
            <SecreteWrapper>
              <img src={keyIcon} />
              <input
                value={secreteWord}
                placeholder="비밀단어"
                onChange={e => setSecreteWord(e.target.value)}
              />
              <AiFillInfoCircle
                style={{
                  cursor: "pointer",
                  width: "16px",
                  marginLeft: "16px",
                  color: " #FBB03B",
                }}
                onClick={() => {
                  setModal(true);
                }}
              />
            </SecreteWrapper>
          </InputWrapper>
          <RegisterBtn>회원가입</RegisterBtn>
        </RegisterForm>
      </RegisterWrapper>
      <Footer>Copyright ⓒ RE:WHA. All Rights Reserved.</Footer>
    </>
  );
};
export default RegisterPage;

const RegisterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 47px;
`;
const Title = styled.img`
  margin-top: 98px;
`;
const RegisterForm = styled.form`
  margin-top: 58px;
  div {
    width: 294px;
  }
  input {
    height: 41px;
    padding-left: 49px;

    background: #f9f9f9;
    border-radius: 8px;
    border-style: none;
    outline: none;

    font-weight: 400;
    font-size: 14px;
  }
`;
const InputWrapper = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const IdWrapper = styled.div`
  input {
    width: 294px;
  }
  .idIcon {
    width: 22px;
    position: absolute;
    z-index: 2;
    margin: 11px 0 0 12px;
    color: #979797;
  }
`;
const PwWrapper = styled.div`
  input {
    margin-top: 16px;
  }
  img {
    width: 18px;
    position: absolute;
    z-index: 2;
    margin: 27px 0 0 12px;
    color: #979797;
  }
  .PW {
    width: 294px;
  }
  .PW2 {
    width: 262px;
  }
`;
const NameWrapper = styled.div`
  margin-top: 16px;
  input {
    width: 294px;
  }
  img {
    width: 18px;
    position: absolute;
    z-index: 2;
    margin: 11px 0 0 12px;
    opacity: 80%;
  }
`;
const SecreteWrapper = styled.div`
  margin: 16px 0 26px 0;
  img {
    width: 18px;
    position: absolute;
    z-index: 2;
    margin: 11px 0 0 12px;
    opacity: 80%;
  }
`;
const RegisterBtn = styled.button`
  cursor: pointer;
  width: 294px;
  height: 41px;

  background: linear-gradient(90deg, #004628 0%, #107047 100%);
  border-radius: 8px;
  border-style: none;

  font-weight: 600;
  font-size: 16px;
  color: #fffef5;
`;
const Footer = styled.div`
  width: 100%;
  height: 59px;
  margin-top: 157px;
  vertical-align: baseline;

  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  color: #a5a5a5;
`;
