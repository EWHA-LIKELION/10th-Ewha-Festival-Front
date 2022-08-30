import {http} from "../http.js";
import axios from "axios";


const UserService = {
  //프로필 조회
  getProfile: () => http.get("/accounts/"),

  //로그인 
  getUser: (id, password) =>
      //http.post("/accounts/login/"){
      axios.post("http://43.200.53.202/accounts/login/",{
      username: id,
      password: password,
    }),
  
  //회원가입 api
  postUser: (id,password,name) =>
    //http.post("/accounts/signup/"){
    axios.post("http://43.200.53.202/accounts/signup/",{
    username: id,
    password: password,
    nickname: name,
  }),
};


export default UserService;
