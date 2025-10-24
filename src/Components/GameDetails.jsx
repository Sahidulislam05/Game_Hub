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
  const {
    description,
    title,
    ratings,
    developer,
    coverPhoto,
    category,
    releaseYear,
    downloadLink,
  } = games || {};
  return (
    <div>
      <title> Game Details </title>
      <div className=" mt-10 flex flex-col justify-center items-center">
        <div className="card bg-base-100 w-[70%] shadow-sm">
          <figure className="mt-10">
            <img src={coverPhoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h2 className="font-semibold">Category: {category}</h2>
            <p> Release Year: {releaseYear}</p>
            <p>{description}</p>
            <h1>
              Download Link :
              <a
                href={downloadLink}
                target="_blank"
                className="underline cursor-pointer text-red-400 ml-2"
              >
                {downloadLink}
              </a>
            </h1>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">Rating: {ratings}</div>
              <div className="badge badge-outline">
                Developed by: {developer}
              </div>
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
