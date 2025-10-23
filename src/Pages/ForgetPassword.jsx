import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const ForgetPassword = () => {
  const { ForgetPassword, email: savedEmail } = use(AuthContext);
  //   console.log(email);
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    ForgetPassword(email)
      .then(() => {
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.code);
      });
    // console.log(email);
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleResetPassword}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-xl font-bold text-center">Forget Password</h1>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            defaultValue={savedEmail}
          />

          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            className="btn btn-neutral mt-4"
          >
            Reset Password
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassword;
