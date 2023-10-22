import React from "react";
import "./css/index.css";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardMain from "./components/DashboardMain";

function HomePage() {
  return (
    <>
      <DashboardSidebar />
      <DashboardMain />
    </>
  );
}

export default HomePage;
