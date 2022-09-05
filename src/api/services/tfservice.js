import { http } from "../http";

const TfService = {
  getAllNotice: () => http.get("/notices/"), // 모든 공지 조회
  getNotice: noticeId => http.get(`/notices/${noticeId}/`), // 공지 상세
};

export default TfService;