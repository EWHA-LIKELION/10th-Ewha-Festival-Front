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
  // 이 밑으로 아직 작업 안함
  getAllBooth: () => http.get("/booths/"), // 모든 부스 조회
  getBooth: boothId => http.get(`/booths/${boothId}/`), // 부스 상세
};

export default BoothService;
