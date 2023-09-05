import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderSectionContainer from "../../components/HeaderSection/HeaderSectionContainer/HeaderSectionContainer";

function MainLayout(props) {
  return (
    <div>
      <HeaderSectionContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
