import CarouselComponent from "./Banner/CarouselComponent";
import { useLoaderData } from "react-router";
import PopularGames from "./Banner/PopularGames";
import Newsletter from "../../Components/Newsletter";
import { motion } from "motion/react";
const Home = () => {
  const gamesData = useLoaderData();
  //   console.log(gamesData);
  const popularAppsData = gamesData.slice(0, 8);
  return (
    <div className="mt-12">
      <div className="text-center pb-10 overflow-hidden relative text-amber-400">
        <motion.h1
          className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Gamehub - A Game Library
        </motion.h1>
      </div>

      {/* Slider  */}
      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CarouselComponent></CarouselComponent>
      </motion.main>
      {/* Popular Games  */}
      <PopularGames popularAppsData={popularAppsData}></PopularGames>
      {/* News letter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
