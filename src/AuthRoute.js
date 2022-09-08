import React from "react";
import { Navigate } from "react-router-dom";


const isLogin = () => !! localStorage.getItem("token");

export default function AuthRoute ({component: Component}){
    return(
      isLogin() ? Component : <Navigate to="/login"/>
    )
}