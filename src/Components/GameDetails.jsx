import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FaStar } from "react-icons/fa";
import Loading from "../Pages/Loading";

const GameDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const game = apps.find((g) => String(g.id) === id);

  if (!game) {
    return <Loading></Loading>;
  }

  const {
    title,
    description,
    ratings,
    developer,
    coverPhoto,
    category,
    releaseYear,
    downloadLink,
  } = game;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-linear-to-br from-white/90 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
        <figure className="relative">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
        </figure>

        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-semibold">Category:</span> {category} |
            <span>Release Year: {releaseYear}</span> |
            <span>Developer: {developer}</span>
          </div>

          <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-amber-400 mb-4">
            {[...Array(Math.round(ratings || 4))].map((_, i) => (
              <FaStar key={i} size={16} />
            ))}
            <span className="ml-2 text-gray-600 dark:text-gray-300">
              {ratings?.toFixed(1) || "4.0"} / 5
            </span>
          </div>

          {/* Download Link */}
          {downloadLink && (
            <div className="mt-4">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 py-2 rounded-lg hover:opacity-90 transition"
              >
                Download Game
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center py-10">
        <Link
          to="/"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none px-6 hover:opacity-90 transition"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default GameDetails;
