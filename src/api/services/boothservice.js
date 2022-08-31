import { http } from "../http";

const BoothService = {
  // 요일, 장소에 따른 부스 조회
  getKeywordBooth: (day, college) =>
    http.get(`/booths?day=${day}&college=${college}`),
  likeBooth: boothId =>
    http.post(`/booths/${boothId}/likes/
`),
  unLikeBooth: boothId =>
    http.delete(`/booths/${boothId}/likes/
`),
  getAllBooth: () => http.get("/booths/"), // 모든 부스 조회
  getBooth: boothId => http.get(`/booths/${boothId}/`), // 부스 상세
  submitComment: (boothId, newComment) =>
    http.post(`/booths/${boothId}/comments/`, { content: newComment }), //댓글 작성
  deleteComment: (boothId, cId) =>
    http.delete(`/booths/${boothId}/comments/${cId}/`), //댓글 삭제
};

export default BoothService;
