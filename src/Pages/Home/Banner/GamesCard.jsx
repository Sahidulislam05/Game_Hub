import { Link } from "react-router";
import Reveal from "../../../Animation/Reveal";

const GamesCard = ({ apps }) => {
  const { description, title, ratings, developer, coverPhoto, id } = apps;

  return (
    <Reveal>
      <Link to={`/games-details/${id}`}>
        <div className="card bg-base-200 border shadow-sm flex flex-col h-full">
          {/* Image Section */}
          <figure>
            <img
              className="w-full h-[200px] object-cover mt-3 rounded"
              src={coverPhoto}
              alt={title}
            />
          </figure>

          {/* Body Section */}
          <div className="card-body flex flex-col justify-between">
            {/* Text Content */}
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {description}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="card-actions justify-end mt-4">
              <div className="badge badge-outline">{ratings}</div>
              <div className="badge badge-outline">{developer}</div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default GamesCard;
