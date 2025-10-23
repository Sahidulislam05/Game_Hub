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
      <div className="text-center font-bold pb-10 overflow-hidden relative text-amber-400">
        <motion.h1 className="hidden md:block"
          animate={{
            scale: 2,
            transition: { duration: 2 },
          }}
        >
          Welcome to Gamehub - A Game Library
        </motion.h1>
        <h1 className="md:hidden">Welcome to Gamehub - A Game Library</h1>
      </div>

      {/* Slider  */}
      <CarouselComponent></CarouselComponent>
      {/* Popular Games  */}
      <PopularGames popularAppsData={popularAppsData}></PopularGames>
      {/* News letter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
