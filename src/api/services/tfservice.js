import { http } from "../http";

const TfService = {
  getAllNotice: () => http.get("/notices/"), // 모든 공지 조회
  getNotice: noticeId => http.get(`/notices/${noticeId}/`), // 공지 상세
  deleteNotice: noticeId => http.delete(`/notices/${noticeId}/`), //댓글 삭제
  // 공지사항 수정

  putNotice: (id, title, content) =>
    http.put(`/notices/${id}/`, {
      title: title,
      content: content,
    }),
  // 공지사항 작성
  postNotice: (title, content) =>
    http.post("/notices/", {
      title: title,
      content: content,
    }),
};

export default TfService;
