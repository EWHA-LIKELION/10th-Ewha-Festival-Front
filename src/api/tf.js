import TfService from "./services/tfservice";

export const GetAllNotice = async () => {
  try {
    const response = await TfService.getAllNotice();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "모든 공지 조회 실패");
  }
};

export const GetNotice = async noticeId => {
  try {
    const response = await TfService.getNotice(noticeId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "공지 상세 조회 실패");
  }
};

export const DeleteNotice = async (noticeId) => {
  try {
    const response = await  TfService.deleteNotice(noticeId);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "공지 삭제 실패");
  }
};