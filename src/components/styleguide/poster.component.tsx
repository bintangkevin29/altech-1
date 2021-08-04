import React from "react";
import { FeedItem } from "../../definition";
import placeholder from "../../assets/placeholder.png";
import { Link } from "react-router-dom";

interface PosterProps {
  data: FeedItem;
}

const Poster: React.FC<PosterProps> = ({ data }) => {
  return (
    <Link to={data.path || "#"}>
      <div className="poster">
        <div className="poster__img-container">
          <img
            className="poster__thumbnail"
            src={data.images ? data.images["Poster Art"].url : placeholder}
            alt=""
          />
          {data.alternateTitle && (
            <span className="poster__alternate-title">
              {data.alternateTitle}
            </span>
          )}
        </div>
        <div className="poster__title">{data.title}</div>
      </div>
    </Link>
  );
};

export default Poster;
