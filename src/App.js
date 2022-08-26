import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";

// 마이페이지
import MyUser from "./pages/mypage/MyUser";
import MyManager from "./pages/mypage/MyManager";

//테스트
import ReduxTest from "./pages/reduxTest";
// 디테일
import BoothDetailPage from "./pages/boothdetailpage/BoothDetailPage";
// 수정페이지
import EditBoothPage from "./pages/editboothpage/EditBoothPage";
import EditMenuPage from "./pages/editmenupage/EditMenuPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route exact path="/" element={<MainPage />} />
        {/* 부스 */}
        <Route exact path="/category" element={<Category />} />

        {/* 마이페이지 */}
        <Route exact path="/mypage_user" element={<MyUser />} />
        <Route exact path="/mypage_manager" element={<MyManager />} />

        {/* 로그인 테스트 */}
        <Route exact path="/test" element={<ReduxTest />} />
         {/* 디테일 */}

        <Route exact path="/category/detail" element={<BoothDetailPage />} />
 {/* 수정 */}
        <Route exact path="/editbooth" element={<EditBoothPage />} />
        <Route exact path="/editmenu" element={<EditMenuPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
