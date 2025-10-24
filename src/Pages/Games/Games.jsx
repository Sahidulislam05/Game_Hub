import React from "react";
import useApps from "../../Hooks/useApps";
import AllGames from "./AllGames";
import { Link } from "react-router";
import { motion } from "motion/react";
const Games = () => {
  const { apps } = useApps();
  //   console.log(apps);
  const sortedAppsList = [...apps].sort((a, b) => b.ratings - a.ratings);
  return (
    <div>
      <title> Games </title>
      <motion.h1
        className="text-xl md:text-4xl font-bold text-center pt-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        All Games
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {sortedAppsList.map((apps) => (
          <AllGames apps={apps} key={apps.id}></AllGames>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <Link
          to="/"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Games;
