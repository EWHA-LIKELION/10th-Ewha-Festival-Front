import MyManager from "../../components/Mypage/MyManager";
import MyUser from "../../components/Mypage/MyUser";
import { useState, useEffect } from "react";

import { useAppSelector } from "../../redux/store";

const Mypage = () => {
  const { isBooth } = useAppSelector(state => state.user);

  if (JSON.stringify(isBooth) == "true") {
    console.log("부스관리자입니당");
    return <MyManager />;
  } else {
    console.log("일반유저입니당");
    return <MyUser />;
  }
};

export default Mypage;
