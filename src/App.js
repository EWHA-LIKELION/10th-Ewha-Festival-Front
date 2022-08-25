import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";
// 마이페이지
import MyUser from "./pages/mypage/MyUser";
import MyManager from "./pages/mypage/MyManager";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
