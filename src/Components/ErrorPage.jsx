import { Link } from "react-router";
import errorPage from "../assets/error-404.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <title> 404/Not Found </title>
      <Navbar></Navbar>
      <div className="bg-gray-100 pb-3">
        <div className="container mx-auto py-5">
          <div className="flex flex-col justify-center items-center">
            <img src={errorPage} alt="" />
            <h1 className="text-5xl font-semibold text-center py-3">
              Oops, page not found!
            </h1>
            <p className="text-xl text-center my-4 text-[#627382]">
              The page you are looking for is not available.
            </p>
            <Link
              to="/"
              className="btn btn-primary font-semibold text-white mt-4  "
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
