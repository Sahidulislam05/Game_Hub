import React from "react";
import { Link } from "react-router";
import GamesCard from "./GamesCard";

const PopularGames = ({ popularAppsData }) => {
  //   console.log(popularAppsData);

  const sortedApps = [...popularAppsData].sort((a, b) => b.ratings - a.ratings);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-stretch ">
        {sortedApps.map((apps) => (
          <GamesCard key={apps.id} apps={apps}></GamesCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <Link
          to="/games"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
