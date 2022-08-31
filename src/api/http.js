import axios from "axios";

export const http = axios.create({
  baseURL: "http://43.200.53.202",
});

http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token")) ?? false;
console.log("토큰이다ㅏㅏㅏㅏㅏㅏㅏ: ", token);

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
