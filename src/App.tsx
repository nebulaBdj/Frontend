import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigations/Navigation"
import Footer from "./components/Footer/Footer";

export default function App() {

  return (
    <div className="w-[95%] mx-auto">
      <Navigation></Navigation>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
