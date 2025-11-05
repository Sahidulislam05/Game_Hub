import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <div
      className="
        min-h-screen 
        flex flex-col 
        text-[#E6EEF8]
        bg-linear-to-b from-[#0B0F1A] to-[#0F1724]
        relative overflow-hidden
        transition-colors duration-500
      "
    >
      {/* Neon accent glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-[800px] h-[600px] bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 blur-[120px]" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F1724]/60 backdrop-blur-md border-b border-cyan-500/10 shadow-md">
        <Navbar />
      </nav>

      {/* Page content */}
      <main className="grow pt-20">
        {state === "loading" ? <Loading /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-cyan-500/10 bg-[#0F1724]/50 backdrop-blur-md">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
