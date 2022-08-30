import { useAppDispatch, useAppSelector } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { persistor } from "../index";
import styled from "styled-components";
import { http } from "../api/http";
import axios from "axios";

const ReduxTest = () => {
  const dispatch = useAppDispatch();
  const { username, id, nickname, isBooth, isTf } = useAppSelector(
    state => state.user,
  );

  const Logout = async () => {
    window.location.reload();
    await persistor.purge();
    window.localStorage.removeItem("token");
  };

  const Login = () => {
    axios
      .post("http://43.200.53.202/accounts/login/", {
        username: "1234",
        password: "1234",
      })
      .then(res => {
        console.log(res);
        const token = res.data.data.access_token;
        window.localStorage.setItem("token", JSON.stringify(token));
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const Profile = () => {
    http
      .get("/accounts/")
      .then(res => {
        console.log(res);
        const id = res.data.data.id;
        const nickname = res.data.data.nickname;
        const username = res.data.data.username;
        const isBooth = res.data.data.is_booth;
        const isTf = res.data.data.is_tf;
        console.log(isBooth, isTf, "뭐냐");
        dispatch(
          setUser({
            id: id,
            nickname: nickname,
            username: username,
            isBooth: isBooth,
            isTf: isTf,
          }),
        );
      })
      .catch(err => console.log(err));
  };

  const Regi = () => {
    axios
      .post("http://43.200.53.202/accounts/signup/", {
        username: "1111",
        password: "1234",
        nickname: "1111",
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const Test = () => {
    http
      .patch("/booths/1/", {
        name: "수정된 이름",
      })
      .then(res => {
        console.log("뷰스 수정", res);
      })
      .catch(err => console.log("수정 실패", err));
  };
  return (
    <div>
      <button onClick={() => Test()}>부스 수정</button>
      <button onClick={() => Login()}>로그인 </button>
      <button onClick={() => Profile()}>프로필 조회 </button>
      <button onClick={() => Regi()}>회원가입 </button>
      <hr />
      <button onClick={async () => Logout()}>로그아웃</button>
      <p>id : {id}</p>
      <p>nickname:{nickname}</p>

      <p>username : {username}</p>
      <p>부스 : {isBooth.toString()}</p>
      <p>tf : {isTf.toString()}</p>

      <Box className="box">
        <div className="text">
          <p>블라</p>
          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>
          <br />
          <br />
          <p>블라</p>
          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>
          <br />
          <br />
          <br />
          <br />
          <p>블라</p>
          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>
          <br />
          <br />
          <p>블라</p>
          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>

          <p>블라</p>
        </div>
      </Box>
    </div>
  );
};

export default ReduxTest;

const Box = styled.div`
  height: 500px;
  width: 100px;
  border: solid 1px red;

  overflow: hidden;
`;
