import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = use(AuthContext);
  // console.log(user);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Upadated Profile");
      })
      .catch((e) => {
        toast.error(e.code);
        setUser(user);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* <h1 className="text-center font-semibold text-xl">
            {user.displayName}{" "}
          </h1> */}
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Your Name"
          />

          <label className="label">URL</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo-URL"
          />

          <button className="btn btn-neutral mt-4">Update Information</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateProfile;
