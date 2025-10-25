import { Link } from "react-router";
import Reveal from "../../Animation/Reveal";
import { FaStar } from "react-icons/fa";

const AllGames = ({ apps }) => {
  const { description, title, ratings, developer, id, coverPhoto } = apps;

  return (
    <Reveal>
      <Link to={`/games-details/${id}`}>
        <div className="group relative bg-linear-to-br from-white/90 to-gray-100 rounded-2xl overflow-hidden flex flex-col h-full border border-gray-500">
          <figure className="relative overflow-hidden">
            <img
              className="w-full h-52 sm:h-56 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              src={coverPhoto}
              alt={title}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
          </figure>

          <div className="px-4 py-5 flex flex-col justify-between grow">
            <div>
              <h2
                className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white 
                group-hover:text-[#23BE0A] transition-colors duration-300"
              >
                {title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mt-2">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(Math.round(ratings || 4))].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                  {ratings?.toFixed(1) || "4.0"}
                </span>
              </div>

              <div className="badge badge-outline px-3 py-2 text-xs sm:text-sm font-medium border-[#23BE0A] text-[#23BE0A]">
                {developer || "Unknown"}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default AllGames;
