import { http } from "../http";

const BoothService = {
  getAllBooth: () => http.get(""), // 모든 부스 조회
  getBooth: boothId => http.get(""), // 부스 상세
  getKeywordBooth: (day, college) =>
    http.get(`/booths?day=${day}&college=${college}`), // 요일, 장소에 따른 부스 조회
};

export default BoothService;
