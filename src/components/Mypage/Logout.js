import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { Pretendard } from "../../components/Text";

import logout from "../../images/mypage/logout.svg";

const Logout = () => {
  return (
    <LogoutBox>
      <p>
        <Pretendard weight="600" size="16px" color="white">
          로그아웃
        </Pretendard>
      </p>
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
