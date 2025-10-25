import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import Loading from "../Pages/Loading";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();

    if (!name || !photo) {
      toast.error("Please fill in all fields");
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Updated Successfully!");
      })
      .catch((e) => {
        toast.error(e.code || "Update failed");
        setUser(user);
      });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center mt-5">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-20 px-4 sm:px-6">
      <title>Update Profile</title>
      <form
        onSubmit={handleUpdateProfile}
        className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">
          Update Profile
        </h2>

        <div className="flex justify-center">
          <img
            src={
              user?.photoURL ||
              "https://img.icons8.com/?size=96&id=80850&format=png"
            }
            alt={user?.displayName || "User"}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-purple-500 object-cover"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="label text-gray-700 dark:text-gray-300 font-semibold">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="Your Name"
          />
        </div>

        {/* Photo URL*/}
        <div className="flex flex-col">
          <label className="label text-gray-700 dark:text-gray-300 font-semibold">
            Photo URL
          </label>
          <input
            name="photo"
            type="text"
            className="input input-bordered w-full"
            placeholder="Profile Photo URL"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <button
            type="submit"
            className="btn btn-gradient w-full sm:w-auto bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#9F62F2] hover:to-[#632EE3]"
          >
            Update Information
          </button>
          <Link
            to="/"
            className="btn btn-outline w-full sm:w-auto border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
          >
            Go Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
