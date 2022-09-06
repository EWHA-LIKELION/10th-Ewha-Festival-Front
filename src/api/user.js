import UserService from "./services/userservice";

// 로그아웃
export const Logout = () => {
  alert("세션 만료, 다시 로그인해주세요.");
  UserService.logout();
};

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
export const GetProfile = async token => {
  try {
    const response = await UserService.getProfile(token);
    return Promise.resolve(response.data);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }

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

// 좋아요한 부스 조회
export const GetLikes = async token => {
  try {
    const response = await UserService.getLikes(token);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }

    return Promise.reject(error, "좋아요한 부스 조회 실패");
  }
};
