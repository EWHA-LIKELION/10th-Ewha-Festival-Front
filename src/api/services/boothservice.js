import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { http } from "../http";

const BoothService = {
// 부스 검색
  getSearchBooth: (keyword) =>  http.get(`/booths/search/?keyword=${keyword}`),
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
  // 부스 수정
  patchBooth: (boothId, name, notice, description) =>
    http.patch(`/booths/${boothId}/`, {
      name: name,
      notice: notice,
      description: description,
    }),
  // 메뉴 조회
  getMenu: boothId => http.get(`/booths/${boothId}/menus/`),
  // 메뉴 수정
  patchMenu: (boothId, menuId, menu, price, is_soldout) =>
    http.patch(`/booths/${boothId}/menus/${menuId}/`, {
      menu: menu,
      price: price,
      is_soldout: is_soldout,
    }),
};

export default BoothService;
