import styled from "styled-components";
import { Pretendard } from "../../components/Text";

import { useNavigate } from "react-router-dom";
import { persistor } from "../../index";

const Logout = () => {
  const navigate = useNavigate();

  // 로그아웃 함수
  const Logout = async () => {
    await persistor.purge();
    window.localStorage.removeItem("token");
    console.log("마이페이지 로그아웃");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Pretendard color="var(--white)" weight="600" size="16px">
        <Button onClick={Logout}>로그아웃</Button>
      </Pretendard>
    </>
  );
};

export default Logout;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  padding: 12px;
  background: linear-gradient(90deg, #004628 0%, #107047 100%);
  width: 335px;
  margin: 30px auto;
`;
