import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, updateUser, setUser, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const photo = e.target.photo?.value;
    // console.log("clicked", email, password, name, photo);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    // SignUp function
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((e) => {
            toast.error(e.code);
            setUser(user);
          });
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast("This email address is already in use.");
        } else if (e.code === "auth/invalid-email") {
          toast("The email address is badly formatted.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast(
            "Email/password accounts are not enabled. Please contact support."
          );
        } else if (e.code === "auth/weak-password") {
          toast("The password is too weak. Please choose a stronger password.");
        } else if (e.code === "auth/user-disabled") {
          toast("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast("Too many attempts. Please try again later.");
        } else if (e.code === "auth/network-request-failed") {
          toast("Network error. Please check your internet connection.");
        } else {
          console.error("Unhandled auth error", e);
          toast("An unexpected error occurred: " + (e.message || e.code));
        }
      });

    // Google Login
  };
  const handleGoogleLogIn = () => {
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
    <div>
      <title> Register </title>
      <div className="flex justify-center  items-center my-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-bold text-2xl text-center">
            Register your account
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name  */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />

                {/* Photo URL  */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                />
                {/* Email  */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* Password  */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="* * * * * * *"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-6 top-8 cursor-pointer z-50 "
                  >
                    {show ? (
                      <FaEye size={18}></FaEye>
                    ) : (
                      <IoEyeOff size={18}></IoEyeOff>
                    )}
                  </span>
                </div>

                <button type="submit" className="btn btn-neutral my-4">
                  Register
                </button>

                <h1 className="text-center">
                  Already Have An Account ?{" "}
                  <Link
                    to="/login"
                    className="text-red-500 underline font-semibold"
                  >
                    Login
                  </Link>
                </h1>
              </fieldset>
            </form>
            {/* divider  */}
            <div className="flex justify-center items-center gap-2">
              <div className="border w-[45%] "></div>
              or
              <div className="border w-[45%] "></div>
            </div>
            {/* Google */}
            <div className="flex justify-center items-center">
              <button
                onClick={handleGoogleLogIn}
                className="btn text-black border-[#e5e5e5] w-full m-2 bg-blue-300 "
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
