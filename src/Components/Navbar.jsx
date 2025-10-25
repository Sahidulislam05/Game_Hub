import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/logo-preview.png";

const Navbar = () => {
  const { user, logOut, setUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold text-gray-800 "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold text-gray-800 "
          }
          to="/games"
        >
          Games
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
                  : "font-semibold text-gray-800 "
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
                  : "font-semibold text-gray-800 "
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successful");
        setUser(null);
      })
      .catch((err) => toast.error(err.code));
  };

  return (
    <div className="bg-purple-500/30 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-2">
        {/* DaisyUI */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 md:w-14 h-10 md:h-14 rounded-xl"
          />
          <span className="font-bold text-lg md:text-2xl text-gray-900">
            Game Hub
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex menu-horizontal px-1 space-x-4">
            {links}
          </ul>

          {user && (
            <div className="flex items-center gap-3">
              <button onClick={handleSignOut} className="btn btn-accent btn-sm">
                Log Out
              </button>
              <Link to="/my-profile">
                <img
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                  src={user.photoURL}
                  alt="User"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
