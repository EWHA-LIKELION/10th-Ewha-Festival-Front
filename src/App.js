import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";
// 공지
import Create from "./pages/noticepage/Create";
import Update from "./pages/noticepage/Update";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
