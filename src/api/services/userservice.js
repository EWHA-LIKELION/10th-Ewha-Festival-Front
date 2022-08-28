import http from "../http.js";

const UserService = {
  getUser: user => http.get("~/user"),

  //로그인 
  getUser: (id, password) =>
    http.post("/accounts/login/",{
      username: id,
      password: password,
    }),
  
  //회원가입 api
  postUser: (id,password,name) =>
    http.post("/accounts/signup/",{
    username: id,
    password: password,
    nickname: name,
  }),
};


export default UserService;
