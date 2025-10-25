import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import Loading from "./Loading";

const MyProfile = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-10">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start mt-20 px-4 sm:px-6 lg:px-8">
      <title>My Profile</title>

      <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-3 text-xl sm:text-2xl font-bold">
          My Profile
        </div>

        <div className="flex justify-center mt-6">
          <img
            src={
              user?.photoURL ||
              "https://img.icons8.com/?size=96&id=80850&format=png"
            }
            alt={user?.displayName || "User"}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-green-500 object-cover"
          />
        </div>

        <div className="card-body text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-4">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 wrap-break-word">
            Email: {user?.email || "Not Provided"}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {user?.emailVerified
              ? "Email Verified ✅"
              : "Email Not Verified ❌"}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            UID: {user?.uid || "N/A"}
          </p>

          <div className="mt-6">
            <Link
              to="/update-profile"
              className="btn btn-neutral w-full sm:w-auto px-6 py-2 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300"
            >
              Update Profile
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-1 mb-2">
          <p>
            Created:{" "}
            {user?.metadata?.creationTime
              ? new Date(user.metadata.creationTime).toLocaleString()
              : "N/A"}
          </p>
          <p>
            Last Login:{" "}
            {user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
