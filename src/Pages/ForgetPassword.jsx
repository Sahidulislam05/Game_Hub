import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { ForgetPassword, email: savedEmail } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    ForgetPassword(email)
      .then(() => {
        toast.success("Check your email to reset password");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };

  return (
    <div className="flex justify-center items-center mt-20 px-4 sm:px-6 lg:px-8">
      <title>Forget Password</title>

      <form
        onSubmit={handleResetPassword}
        className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Forget Password
        </h1>

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={savedEmail}
          className="input input-bordered w-full mb-4"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="btn btn-neutral w-full py-2 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
