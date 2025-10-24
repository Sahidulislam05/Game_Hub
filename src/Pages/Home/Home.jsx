import { useLoaderData } from "react-router";
import PopularGames from "./Banner/PopularGames";
import Newsletter from "../../Components/Newsletter";
import { motion } from "motion/react";
import CarouselComponent from "./Banner/Carousel/CarouselComponent";
const Home = () => {
  const gamesData = useLoaderData();
  //   console.log(gamesData);
  const popularAppsData = gamesData.slice(0, 8);
  return (
    <div className="mt-12">
      <title> Home </title>
      <div className="text-center pb-10 overflow-hidden relative text-amber-400">
        <motion.h1
          className="text-xl md:text-3xl font-bold text-blue-500/80 "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Gamehub -{" "}
          <span className="text-[#23BE0A] "> A Game Library</span>
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
