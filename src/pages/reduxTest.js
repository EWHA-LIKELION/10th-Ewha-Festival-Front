import { useAppDispatch, useAppSelector } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { persistor } from "../index";
import styled from "styled-components";
import { http } from "../api/http";
import axios from "axios";

const ReduxTest = () => {
  const dispatch = useAppDispatch();
  const { username, id, nickname, isBooth, isTf, boothId } = useAppSelector(
    state => state.user,
  );

  const Logout = async () => {
    window.location.reload();
    await persistor.purge();
    window.localStorage.removeItem("token");
  };

  const Login = () => {
    axios
      .post("https://api.rewha2022.com/accounts/login/", {
        username: "0000",
        password: "0000",
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
        dispatch(setNotice(res.data.data));
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

      <p>부스 아이디 : {boothId?.toString()}</p>
    </div>
  );
};

export default ReduxTest;
