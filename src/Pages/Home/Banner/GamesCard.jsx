import { Link } from "react-router";
import Reveal from "../../../Animation/Reveal";

const GamesCard = ({ apps }) => {
  //   console.log(apps);
  const { description, title, ratings, developer, coverPhoto, id } = apps;

  return (
    <Reveal>
      <Link to={`/games-details/${id}`}>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              className="w-2xs h-[200px] mt-3"
              src={coverPhoto}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
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
