import { http } from "../http.js";
import axios from "axios";

const UserService = {
  //프로필 조회
  getProfile: token =>
    axios.get("https://api.rewha2022.com/accounts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  //로그인
  getUser: (id, password) =>
    //http.post("/accounts/login/"){
    axios.post("https://api.rewha2022.com/accounts/login/", {
      username: id,
      password: password,
    }),

  //회원가입 api
  postUser: (id, password, name) =>
    //http.post("/accounts/signup/"){
    axios.post("https://api.rewha2022.com/accounts/signup/", {
      username: id,
      password: password,
      nickname: name,
    }),
};

export default UserService;