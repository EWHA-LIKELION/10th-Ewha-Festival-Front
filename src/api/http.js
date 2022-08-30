import axios from "axios";

export const http = axios.create({
  baseURL: "http://43.200.53.202",
});

http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token")) ?? false;
<<<<<<< HEAD
console.log("토큰 : ", token);
=======
console.log("토큰이다ㅏㅏㅏㅏㅏㅏㅏ: ", token);
>>>>>>> 6275137a2f18004d9fdf96f73140af9976b2c119

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
