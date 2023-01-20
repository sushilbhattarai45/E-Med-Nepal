import { padding } from "@mui/system";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/global.css";

const Nav = () => {
  const htoken = localStorage.getItem("htoken");
  const ptoken = localStorage.getItem("ptoken");
  if(!htoken && !ptoken){
    return <Navigate to="/" replace/>
  }
  return (
    <>
      <Sidebar />
      <div className="layout_container">
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
