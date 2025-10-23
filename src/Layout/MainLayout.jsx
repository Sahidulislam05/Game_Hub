import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-screen w-11/12 mx-auto">
        {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
