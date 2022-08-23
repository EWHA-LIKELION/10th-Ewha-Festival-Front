import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 메인
import MainPage from "./pages/mainpage/MainPage";
// 부스
import Category from "./pages/boothpage/Category";
//테스트
import ReduxTest from "./pages/reduxTest";
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
        {/* 테스트 */}
        <Route exact path="/test" element={<ReduxTest />} />
         {/* 수정 */}
        <Route exact path="/editbooth" element={<EditBoothPage />} />
        <Route exact path="/editmenu" element={<EditMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
