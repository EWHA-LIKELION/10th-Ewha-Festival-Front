import MyManager from "../../components/Mypage/MyManager";
import MyUser from "../../components/Mypage/MyUser";
import React, { useState, useEffect } from "react";

import { http } from "../../api/http";

const Mypage = () => {
  const [isBooth, setBooths] = useState();

  useEffect(() => {
    http
      .get("/accounts/")
      .then(res => {
        console.log("[로그인 유저]\n", res.data.data);
        setBooths(res.data.data.is_booth);
      })
      .catch(err => console.log(err));
  }, []);

  if (JSON.stringify(isBooth) == "true") {
    console.log("부스관리자입니당");
    return <MyManager />;
  } else {
    console.log("일반유저입니당");
    return <MyUser />;
  }
};

export default Mypage;
