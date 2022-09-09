import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.rewha2022.com",
});

http.defaults.withCredentials = true;

const token = JSON.parse(localStorage.getItem("token")) ?? false;
console.log("토큰 : ", token);

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
