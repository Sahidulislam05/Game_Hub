import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/logo-preview.png";
const Navbar = () => {
  const { user, logOut, setUser } = use(AuthContext);
  // console.log(user);
  const links = (
    <>
      <li className="font-bold text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="font-bold text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
              : ""
          }
          to="/games"
        >
          Games
        </NavLink>
      </li>
      {user ? (
        " "
      ) : (
        <li className="font-bold text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                : ""
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      {user ? (
        ""
      ) : (
        <li className="font-bold text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                : ""
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      )}
      {/* {user && (
        <li className="font-bold text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 "
                : ""
            }
            to="/my-profile"
          >
            My Profile
          </NavLink>
        </li>
      )} */}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successful");
        setUser(null);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <>
      <div className="bg-purple-500/50 shadow-sm">
        <div className="navbar w-11/12 mx-auto flex justify-between items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="space-x-4 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex justify-between items-center gap-2">
              <img
                className="bg-black w-10 md:w-14 h-10 md:h-14 rounded-xl"
                src={logo}
                alt=""
              />
              <a className="text-xs md:text-xl font-bold">Game Hub</a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex">
              <ul className="menu-horizontal px-1 space-x-4">{links}</ul>
            </div>
            <div className="ml-2">
              <div>
                {user ? (
                  <div className="flex justify-between items-center gap-1">
                    <div>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-accent"
                      >
                        Log Out
                      </button>
                    </div>
                    <Link to="/my-profile" className="w-10 rounded-full">
                      <img
                        className="w-10 h-10 rounded-full"
                        alt="Not found"
                        src={user.photoURL}
                      />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
