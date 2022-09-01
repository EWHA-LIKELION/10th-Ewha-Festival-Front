import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { Pretendard } from "../../components/Text";

import logout from "../../images/mypage/logout.svg";
import { Link } from "react-router-dom";
import { persistor } from "../../index";

const Logout = () => {
  // 로그아웃 함수
  const Logout = async () => {
    window.location.reload();
    await persistor.purge();
    window.localStorage.removeItem("token");
    console.log("마이페이지 로그아웃");
  };
  return (
    <LogoutBox onClick={Logout}>
      <Link to="/">
        <p>
          <Pretendard weight="600" size="16px" color="white">
            로그아웃
          </Pretendard>
        </p>
      </Link>
    </LogoutBox>
  );
};

export default Logout;

const LogoutBox = styled.div`
  background-image: url(${logout});
  background-repeat: none;
  width: 335px;
  height: 41px;
  margin: 0 auto 60px;
  p {
    margin: 11px auto;
    width: fit-content;
  }
`;
