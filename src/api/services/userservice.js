import { http } from "../http.js";
import axios from "axios";
import { persistor } from "../../index";

const UserService = {
  //프로필 조회
  getProfile: token =>
    axios.get("https://api.rewha2022.com/accounts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  // 로그아웃
  logout: () => {
    console.log("로그아웃 되었습니다.");
    persistor.purge();
    window.localStorage.removeItem("token");
    window.location.href = "https://rewha2022.com/";
  },

  //로그인
  getUser: (id, password) =>
    axios.post("https://api.rewha2022.com/accounts/login/", {
      username: id,
      password: password,
    }),

  //회원가입 api
  postUser: (id, password, name) =>
    axios.post("https://api.rewha2022.com/accounts/signup/", {
      username: id,
      password: password,
      nickname: name,
    }),

  //좋아요한 부스
  getLikes: token =>
    axios.get("https://api.rewha2022.com/accounts/likes/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default UserService;
