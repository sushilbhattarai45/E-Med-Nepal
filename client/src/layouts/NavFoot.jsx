import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

const NavFoot = () => {
  const htoken = localStorage.getItem("htoken");
  const ptoken = localStorage.getItem("ptoken");
  if (htoken) {
    return <Navigate to="/app"/>
  }
  const url = `/app/patient/${ptoken}`
  if (ptoken) {
    return <Navigate to={url} replace/>
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavFoot;
