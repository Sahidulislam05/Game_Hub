// import { useLoaderData } from "react-router";
// import PopularGames from "./Banner/PopularGames";
// import Newsletter from "../../Components/Newsletter";
// import { motion } from "motion/react";
// import CarouselComponent from "./Banner/Carousel/CarouselComponent";
// const Home = () => {
//   const gamesData = useLoaderData();
//   //   console.log(gamesData);
//   const popularAppsData = gamesData.slice(0, 8);
//   return (
//     <div className="mt-12">
//       <title> Home </title>
//       <div className="text-center pb-10 overflow-hidden relative text-amber-400">
//         <motion.h1
//           className="text-xl md:text-3xl font-bold text-blue-500/80 "
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Gamehub -{" "}
//           <span className="text-[#23BE0A] "> A Game Library</span>
//         </motion.h1>
//       </div>

//       {/* Slider  */}
//       <motion.main
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CarouselComponent></CarouselComponent>
//       </motion.main>
//       {/* Popular Games  */}
//       <PopularGames popularAppsData={popularAppsData}></PopularGames>
//       {/* News letter */}
//       <Newsletter></Newsletter>
//     </div>
//   );
// };

// export default Home;

import { useLoaderData } from "react-router";
import PopularGames from "./Banner/PopularGames";
import Newsletter from "../../Components/Newsletter";
import { motion } from "motion/react";
import CarouselComponent from "./Banner/Carousel/CarouselComponent";

const Home = () => {
  const gamesData = useLoaderData();
  const popularAppsData = gamesData.slice(0, 8);

  return (
    <div className="mt-8 md:mt-12 px-4 sm:px-6 lg:px-10">
      <title>Home</title>

      {/* Header Section */}
      <motion.section
        className="text-center mb-8 sm:mb-12 overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500/90 leading-snug">
          Welcome to{" "}
          <span className="text-[#23BE0A] drop-shadow-sm">GameHub</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-lg mx-auto">
          Explore, play, and keep track of your favorite games from one clean
          dashboard 🎮
        </p>
      </motion.section>

      {/* Hero Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-lg mb-12"
      >
        <CarouselComponent />
      </motion.div>

      {/* Popular Games Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Popular Games
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Handpicked favorites trending among players right now 🔥
          </p>
        </div>
        <PopularGames popularAppsData={popularAppsData} />
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <Newsletter />
      </motion.section>
    </div>
  );
};

export default Home;
