import { useAppDispatch, useAppSelector } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { persistor } from "../index";

import { http } from "../api/http";
import axios from "axios";

const ReduxTest = () => {
  const dispatch = useAppDispatch();
  const { userNumber, id, nickname } = useAppSelector(state => state.user);

  const Change = () => {
    dispatch(setUser({ userNumber: 1, id: "maru", nickname: "바부" }));
  };

  const Logout = async () => {
    window.location.reload();
    await persistor.purge();
  };

  const Login = () => {
    axios
      .post("http://43.200.53.202/accounts/login/", {
        username: "5678",
        password: "5678",
      })
      .then(res => {
        console.log(res);

        const token = res.data.data.access_token;
        window.localStorage.setItem("token", JSON.stringify(token));
      })
      .catch(err => console.log(err));
  };

  const Profile = () => {
    http
      .get("/accounts/")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  http
    .get("/notices/")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  http
    .post("/notices/", {
      title: "우와앙",
      content: "ㄴㅇㄹㅇㄴㄹ",
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  http
    .post("/booths/1/comments/", {
      content: "새로운 댓글",
    })
    .then(res => {
      console.log("댓글 작성", res);
    })
    .catch(err => console.log("댓글 실패", err));

  http
    .delete("/booths/1/comments/", {
      data: {
        comment_id: 13,
      },
    })
    .then(res => {
      console.log("댓글 삭제", res);
    })
    .catch(err => console.log("댓글 삭제 실퍂", err));

  const Regi = () => {
    axios
      .post("http://43.200.53.202/accounts/signup/", {
        username: "testdddd",
        password: "1234",
        nickname: "우왕",
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
      <button onClick={() => Login()}>로그인 해봐앙</button>
      <button onClick={() => Profile()}>프로필 조회 </button>
      <button onClick={() => Regi()}>회원가입 </button>
      <hr />
      <button onClick={() => Change()}>변경</button>
      {/* <button onClick={async () => Logout()}>로그아웃</button> */}
      <p>userNumber : {userNumber}</p>
      <p>id : {id}</p>
      <p>nickname:{nickname}</p>
    </div>
  );
};

export default ReduxTest;
