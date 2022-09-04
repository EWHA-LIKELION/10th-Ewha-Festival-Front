import BoothService from "./services/boothservice";

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

export const PatchBooth = async (boothId, name, notice, description) => {
  try {
    const response = await BoothService.patchBooth(
      boothId,
      name,
      notice,
      description,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 수정 실패");
  }
};

export const GetMenu = async menuId => {
  try {
    const response = await BoothService.getMenu(menuId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "메뉴 조회 실패");
  }
};

export const PatchMenu = async (boothId, menuId, menu, price, is_soldout) => {
  try {
    const response = await BoothService.patchMenu(
      boothId,
      menuId,
      menu,
      price,
      is_soldout,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "메뉴 수정 실패");
  }
};
