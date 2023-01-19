import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../css/global.css";

const Nav = () => {
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
