import BoothService from "./services/boothservice";

export const GetSearchBooth = async (keyword) => {
  try {
    const response = await BoothService.getSearchBooth(keyword);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 검색 실패");
  }
};


export const GetKeywordBooth = async (day, college) => {
  try {
    const response = await BoothService.getKeywordBooth(day, college);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "키워드 부스 조회 실패");
  }
};

export const LikeBooth = async boothId => {
  try {
    const response = await BoothService.likeBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 좋아요 실패");
  }
};

export const UnLikeBooth = async boothId => {
  try {
    const response = await BoothService.unLikeBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 좋아요 취소 실패");
  }
};

export const GetAllBooth = async () => {
  try {
    const response = await BoothService.getAllBooth();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "모든 부스 조회 실패");
  }
};

export const GetBooth = async boothId => {
  try {
    const response = await BoothService.getBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 상세 조회 실패");
  }
};

export const SubmitComment = async (boothId, newComment) => {
  try {
    const response = await BoothService.submitComment(boothId, newComment);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 댓글 작성 실패");
  }
};

export const DeleteCommentA = async (boothId, cId) => {
  try {
    const response = await BoothService.deleteComment(boothId, cId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 댓글 삭제 실패");
  }
};
