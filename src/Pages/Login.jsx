// import { use, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../Provider/AuthContext";
// import { toast } from "react-toastify";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";

// const Login = () => {
//   const { loginUser, setUser, googleLogin, email, setEmail } = use(AuthContext);
//   const [error, setError] = useState("");
//   const [show, setShow] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
//     loginUser(email, password)
//       .then((res) => {
//         setUser(res.user);
//         toast.success("Login Successful");
//         // console.log(location.state);
//         navigate(`${location.state ? location.state : "/"}`);
//       })
//       .catch((err) => {
//         // toast.error(err.code);
//         setError(err.code);
//       });

//     // console.log("clicked", email, password);
//   };

//   // console.log(user);

//   const handleGoogleSignIn = () => {
//     googleLogin()
//       .then((res) => {
//         setUser(res.user);
//         toast.success("Login Successful");
//         navigate(`${location.state ? location.state : "/"}`);
//       })
//       .catch((err) => {
//         toast.error(err.code);
//       });
//   };

//   return (
//     <div>
//       <title> Log In </title>
//       <div className="hero my-20">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-2xl font-bold text-center">
//               Login your account
//             </h1>
//             <form onSubmit={handleLogin}>
//               <fieldset className="fieldset">
//                 <label className="label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="input"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <div className="relative">
//                   <label className="label">Password</label>
//                   <input
//                     type={show ? "text" : "password"}
//                     name="password"
//                     className="input"
//                     placeholder="Password"
//                     required
//                   />
//                   <span
//                     onClick={() => setShow(!show)}
//                     className="absolute right-6 top-8 cursor-pointer z-50 "
//                   >
//                     {show ? (
//                       <FaEye size={18}></FaEye>
//                     ) : (
//                       <IoEyeOff size={18}></IoEyeOff>
//                     )}
//                   </span>
//                 </div>
//                 <div>
//                   <Link
//                     to="/forget-password"
//                     className="link text-red-500 underline font-semibold"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
//                 {error && <p className="text-red-500 text-xs"> {error} </p>}
//                 <button type="submit" className="btn btn-neutral mt-4">
//                   Login
//                 </button>
//               </fieldset>
//             </form>
//             {/* divider  */}
//             <div className="flex justify-center items-center gap-2">
//               <div className="border w-[45%] "></div>
//               or
//               <div className="border w-[45%] "></div>
//             </div>
//             {/* Google */}
//             <div className="flex justify-center items-center">
//               <button
//                 onClick={handleGoogleSignIn}
//                 className="btn text-black border-[#e5e5e5] w-full m-2 bg-blue-300 "
//               >
//                 <svg
//                   aria-label="Google logo"
//                   width="16"
//                   height="16"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <g>
//                     <path d="m0 0H512V512H0" fill="#fff"></path>
//                     <path
//                       fill="#34a853"
//                       d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                     ></path>
//                     <path
//                       fill="#4285f4"
//                       d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                     ></path>
//                     <path
//                       fill="#fbbc02"
//                       d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                     ></path>
//                     <path
//                       fill="#ea4335"
//                       d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                     ></path>
//                   </g>
//                 </svg>
//                 Continue with Google
//               </button>
//             </div>
//             <h1 className="text-center text-xs">
//               Don't Have An Account ?{" "}
//               <Link to="/register" className="text-red-500 underline ">
//                 Register
//               </Link>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, setUser, googleLogin, email, setEmail } = use(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      <title> Log In </title>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 w-[90%] sm:w-[420px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-300">
          Welcome Back 🎮
        </h1>
        <p className="text-center text-gray-300 text-sm mb-6">
          Log in to continue your{" "}
          <span className="font-semibold text-indigo-400">Game Hub</span>{" "}
          journey
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter your password"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 top-9 cursor-pointer text-gray-300 hover:text-indigo-400"
            >
              {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
            </span>
          </div>

          {/* Forgot password */}
          <div className="flex justify-between items-center mb-2 text-sm">
            <Link
              to="/forget-password"
              className="text-indigo-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Error message */}
          {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-indigo-500/40"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 border-t border-white/30"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-white/30"></div>
        </div>

        {/* Google login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register link */}
        <p className="text-center text-sm mt-6 text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
