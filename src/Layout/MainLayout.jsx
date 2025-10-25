import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <div
      className="min-h-screen flex flex-col bg-linear-to-b from-blue-50 via-blue-100 to-blue-200
        transition-colors duration-500"
    >
      <nav className="shadow-md">
        <Navbar />
      </nav>

      <main className="min-h-screen w-11/12 mx-auto">
        {state === "loading" ? <Loading /> : <Outlet />}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
