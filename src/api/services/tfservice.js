import { http } from "../http";

const TfService = {
  getAllNotice: () => http.get("/notices/"), // 모든 공지 조회
  getNotice: noticeId => http.get(`/notices/${noticeId}/`), // 공지 상세
  deleteNotice: (noticeId) => http.delete(`/notices/${noticeId}/`), //댓글 삭제
  putNotice: () => http.put(`/notices/{$noticeId}`), // 공지사항 수정
  postNotice: () => http.post('/notices/')
};

export default TfService;