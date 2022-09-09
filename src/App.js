import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AuthRoute from "./AuthRoute";
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
// 만든이들 페이지
import MakersPage from "./pages/makerspage/MakersPage";
// 검색 페이지
import SearchPage from "./pages/searchpage/SearchPage";
// 트래킹
import RouteChangeTracker from "./components/RouteChangeTracker";
function App() {
  //const location = useLocation();

  RouteChangeTracker();

  return (
    <Routes>
      {/* 메인 */}
      <Route exact path="/" element={<MainPage />} />
      {/*검색*/}
      <Route exact path="/search" element={<SearchPage />} />
      {/* 부스 */}
      <Route exact path="/category" element={<Category />} />
      {/* 마이페이지 */}
      <Route exact path="/mypage" element={<Mypage />} />
      {/* 로그인 테스트 */}
      <Route exact path="/test" element={<ReduxTest />} />
      {/* 디테일 */}
      <Route exact path="/category/detail/:id" element={<BoothDetailPage />} />
      {/* 수정 */}
      <Route
        exact
        path="/editbooth"
        element={<AuthRoute component={<EditBoothPage />} />}
      />
      <Route
        exact
        path="/editmenu"
        element={<AuthRoute component={<EditMenuPage />} />}
      />
      <Route
        exact
        path="/editmenu/:id"
        element={<AuthRoute component={<EditMenuDetailPage />} />}
      />
      {/* {공지 게시판} */}
      <Route exact path="/notice" element={<NoticePage />} />
      {/* 공지 상세 보기 페이지 */}
      <Route path="/notice/:id" element={<NoticeDetailPage />} />
      {/* 공지 게시판 작성 */}
      <Route exact path="/create" element={<Create />} />
      {/* 공지  게시판 수정 */}
      <Route exact path="/update" element={<Update />} />
      {/*로그인*/}
      <Route exact path="/login" element={<LoginPage />} />
      {/* 회원 가입 */}
      <Route exact path="/register" element={<RegisterPage />} />
      {/* 쓰레기통 */}
      <Route exact path="/trashbin" element={<TrashPage />} />
      {/* 만든이들 페이지 */}
      <Route exact path="/makers" element={<MakersPage />} />
    </Routes>
  );
}

export default App;
