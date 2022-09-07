import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
//images
import title from "../../images/main/title.svg";
import { FiUser } from "react-icons/fi";
import { MdOutlineLockOpen } from "react-icons/md";
//유저 정보 관련
import { GetUser, GetProfile } from "../../api/user";
import { useAppDispatch } from "../../redux/store";
import { setUser } from "../../redux/userSlice";
import { persistor } from "../../index";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 유저 리덕스
  const dispatch = useAppDispatch();

  // 로그아웃 함수
  const Logout = async () => {
    window.location.reload();
    await persistor.purge();
    window.localStorage.removeItem("token");
  };

  // 로그인 함수
  const Login = e => {
    e.preventDefault();
    //로그인
    GetUser(id, password)
      .then(data => {
        alert(data.message);
        const token = data.data.access_token;
        window.localStorage.setItem("token", JSON.stringify(token)); // 로컬에 유저 토큰 저장
        //유저 프로필 가져오기
        GetProfile(token)
          .then(data => {
            console.log(data.data);
            dispatch(setUser(data.data));
          })
          .catch(error => {
            console.log(error);
          });
        navigate("/"); // 메인페이지로 이동, 로그인 후 이동할 페이지로 수정 필요
      })
      .catch(error => {
        // 에러에 따라 다른 경고 문구 출력
        let type = error.data.non_field_errors;
        type
          ? type == "잘못된 비밀번호입니다."
            ? alert("비밀번호를 확인해주세요.")
            : alert(type)
          : alert("아이디와 비밀번호를 모두 입력해주세요.");
      });
  };

  return (
    <>
      <LoginWrapper>
        <object type="image/svg+xml" data={title} style={{ marginTop: "98px" }}>
          <Title src={title} />
        </object>

        <LoginForm onSubmit={Login}>
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
        {/* <button onClick={Logout}>로그아웃</button> */}
      </LoginWrapper>
      <Footer>Copyright ⓒ RE:WHA. All Rights Reserved.</Footer>
    </>
  );
};

export default LoginPage;

const LoginWrapper = styled.div`
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
  margin-top: 38px; //58px
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
