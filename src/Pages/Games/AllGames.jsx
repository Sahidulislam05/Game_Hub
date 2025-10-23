import React from "react";
import { Link } from "react-router";

const AllGames = ({ apps }) => {
  // console.log(apps)
  const { description, title, ratings, developer, id } = apps;
  return (
    <div>
      <Link to={`/games-details/${id}`}>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            {/* <img src={coverPhoto} alt="Shoes" /> */}
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
    </div>
  );
};

export default AllGames;
