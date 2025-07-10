import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="pt-[12px] bg-[#d7d4ca] min-h-screen">
      <Navbar />
      <Outlet />
    </div>

  );
}
