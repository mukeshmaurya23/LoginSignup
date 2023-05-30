import React from "react";
import NavBar from "../UI/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
const MainContainer = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainContainer;
