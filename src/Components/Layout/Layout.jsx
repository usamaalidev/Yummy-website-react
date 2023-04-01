import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}
