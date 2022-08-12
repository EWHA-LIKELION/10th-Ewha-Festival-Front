import http from "../http";

const UserService = {
  getUser: user => http.get("~/user"),
};

export default UserService;
