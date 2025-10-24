import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  return (
    <div className="flex items-center justify-center mt-20">
      <title> My Profile </title>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="mt-3" src={user.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">
            {" "}
            {user.displayName}{" "}
          </h2>
          <p className=" text-xl">Email : {user.email}</p>
          <div className="card-actions justify-end">
            <Link to="/update-profile" className="btn btn-neutral mt-4">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
