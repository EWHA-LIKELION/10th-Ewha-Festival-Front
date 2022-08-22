import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";
//테스트
import ReduxTest from "./pages/reduxTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route exact path="/" element={<MainPage />} />
        {/* 부스 */}
        <Route exact path="/category" element={<Category />} />
        {/* 테스트 */}
        <Route exact path="/test" element={<ReduxTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
