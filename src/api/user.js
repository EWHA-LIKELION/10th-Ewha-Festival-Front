import UserService from "./services/userservice";

// 로그인
export const GetUser = async (id, password) => {
    try {
      const response = await UserService.getUser(id, password);
  
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error, "로그인 실패");
    }
  };

  // 회원가입
export const PostUser = async (id, password, name) => {
    try {
      const response = await UserService.postUser(id, password, name);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error, "회원가입 실패");
    }
  };