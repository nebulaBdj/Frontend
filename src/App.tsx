import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigations/navigation"
import Footer from "./components/Footer/footer";

export default function App() {

  return (
    <>
      <Navigation></Navigation>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
