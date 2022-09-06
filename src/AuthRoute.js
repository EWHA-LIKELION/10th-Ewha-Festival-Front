import React from "react";
import { Route, Navigate } from "react-router-dom";


const isLogin = () => !!localStorage.getItem("token");

export default function AuthRoute ({component: Component, ...rest}){
    return(
      isLogin() ? Component : <Navigate to="/login"/>
    )
}