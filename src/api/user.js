import UserService from "./services/userservice";

// 로그인
export const GetUser = async (id, password) => {
    try {
      const response = await UserService.getUser(id, password);
  
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response.data, "로그인 실패");
    }
  };

// 프로필 조회 
export const GetProfile = async (token) => {
  try {
    const response = await UserService.getProfile(token);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "프로필 조회 실패");
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