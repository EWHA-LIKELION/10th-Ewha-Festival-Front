import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
//images
import title from "../../images/main/title.svg";
import { FiUser } from "react-icons/fi";
import { MdOutlineLockOpen } from "react-icons/md";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const userList = [];

  //const navigate = useNavigate();

  const SubmitInfo = e => {
    e.prevent.default();
    //----------api 연결 부분----------
    // axios
    //   .post("api주소", {
    //     ID: id,
    //     PW: password,
    //   })
    //   .then(res => {
    //     console.log(res.data.message);
    //     Navigate('/다음페이지')
    //   })
    //   .catch(res => {
    //     console.log(res.data.message);
    //   });
  };

  return (
    <>
      <LoginWrapper>
        <Title src={title} />
        <LoginForm onSubmit={SubmitInfo}>
          <IdWrapper>
            <FiUser className="idIcon" />
            <input
              value={id}
              className="ID"
              placeholder="아이디"
              onChange={e => setId(e.target.value)}
            />
          </IdWrapper>
          <PwWrapper>
            <MdOutlineLockOpen className="pwIcon" />
            <input
              value={password}
              className="PW"
              placeholder="비밀번호"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </PwWrapper>
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginForm>
        <GoSignup>
          <Link to="/register">회원가입</Link>
        </GoSignup>
      </LoginWrapper>
      <Footer>Copyright ⓒ RE:WHA. All Rights Reserved.</Footer>
    </>
  );
};

export default LoginPage;

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 47px;
`;
const Title = styled.img`
  margin-top: 98px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  div {
    width: 294px;
  }
  input {
    width: 294px;
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
const IdWrapper = styled.div`
  .idIcon {
    width: 22px;
    position: absolute;
    z-index: 2;
    margin: 11px 0 0 12px;
    color: #979797;
  }
`;
const PwWrapper = styled.div`
  .pwIcon {
    width: 22px;
    position: absolute;
    z-index: 2;
    margin: 27px 0 0 12px;

    color: #979797;
  }
  .PW {
    margin: 16px 0 26px 0;
  }
`;
const LoginBtn = styled.button`
  width: 294px;
  height: 41px;

  background: linear-gradient(90deg, #004628 0%, #107047 100%);
  border-radius: 8px;
  border-style: none;

  font-weight: 600;
  font-size: 16px;
  color: #fffef5;
`;
const GoSignup = styled.a`
  margin-top: 26px;

  font-weight: 400;
  font-size: 12px;
  text-decoration-line: underline;
  a {
    color: #979797;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 59px;
  margin-top: 288px;
  vertical-align: baseline;

  //키보드 있을 때도 footer 보이는 버전
  //position: relative;
  //transform: translateY(-100%);
  //vertical-align: baseline;

  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  color: #a5a5a5;
`;
