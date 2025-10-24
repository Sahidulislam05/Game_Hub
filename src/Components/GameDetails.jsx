import React from "react";
import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";

const GameDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { apps } = useApps();
  // console.log(apps);
  const games = apps.find((game) => String(game.id) === id);
  // console.log(games);
  const { description, title, ratings, developer } = games || {};
  return (
    <div>
      <title> Game Details </title>
      <div className=" mt-10 flex flex-col justify-center items-center">
        <div className="card bg-base-100 w-[70%] shadow-sm">
          <figure className="mt-10">
            {/* <img src={coverPhoto} alt="Shoes" /> */}
            <img
              className="w-96 h-fit rounded p-3"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{ratings}</div>
              <div className="badge badge-outline">{developer}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-4 md:py-10">
          <Link
            to="/"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center "
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
