import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";
// 공지
import Create from "./pages/noticepage/Create";
import Update from "./pages/noticepage/Update";
// 마이페이지
import Mypage from "./pages/mypage/Mypage";
//테스트
import ReduxTest from "./pages/reduxTest";
//회원가입 페이지
import RegisterPage from "./pages/authpage/RegisterPage";
// 디테일
import BoothDetailPage from "./pages/boothpage/BoothDetailPage";
// 수정페이지
import EditBoothPage from "./pages/boothpage/EditBoothPage";
import EditMenuPage from "./pages/boothpage/EditMenuPage";
import EditMenuDetailPage from "./pages/boothpage/EditMenuDetailPage";
// 공지 게시판 페이지
import NoticePage from "./pages/noticepage/NoticePage";
// 공지 상세 보기 페이지
import NoticeDetailPage from "./pages/noticepage/NoticeDetailPage";
//로그인 페이지
import LoginPage from "./pages/authpage/LoginPage";
//쓰레기통 페이지
import TrashPage from "./pages/trashbinpage/TrashPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route exact path="/" element={<MainPage />} />
        {/* 부스 */}
        <Route exact path="/category" element={<Category />} />
        {/* 공지작성 */}
        <Route exact path="/create" element={<Create />} />
        {/* 공지수정 */}
        <Route exact path="/update" element={<Update />} />
        {/* 마이페이지 */}
        <Route exact path="/mypage" element={<Mypage />} />
        {/* 로그인 테스트 */}
        <Route exact path="/test" element={<ReduxTest />} />
        {/* 디테일 */}
        <Route exact path="/category/detail" element={<BoothDetailPage />} />
        {/* 수정 */}
        <Route exact path="/editbooth" element={<EditBoothPage />} />
        <Route exact path="/editmenu" element={<EditMenuPage />} />
        <Route path="/editmenu/:id" element={<EditMenuDetailPage />} />
        {/* {공지 게시판} */}
        <Route exact path="/notice" element={<NoticePage />} />
        {/* 공지 상세 보기 페이지 */}
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        {/*로그인*/}
        <Route exact path="/login" element={<LoginPage />} />
        {/* 회원 가입 */}
        <Route exact path="/register" element={<RegisterPage />} />
        {/* 쓰레기통 */}
        <Route exact path="/trashbin" element={<TrashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
