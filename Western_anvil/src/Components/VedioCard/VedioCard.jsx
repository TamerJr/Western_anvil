import React from "react";
import { Link } from "react-router-dom";
import "./VedioCard.css";
const VedioCard = ({ EpisodeDetails }) => {
  return (
    <Link to={`vediodetails/${EpisodeDetails.eid}`}>
      <article className="Episode_Detail_Article">
        <figure className="Episode_Detail_Article_Image">
          <img
            src={EpisodeDetails?.small_cover_url}
            alt="Episode_Image"
            className="Img"
          />
        </figure>
        <div className="Episode_details">
          <h1 className="Title_value">
            ...{(EpisodeDetails?.title).toString().substring(0, 50)}
          </h1>
          {/* <p>{EpisodeDetails?.release_date}</p> */}
          <p>{Math.ceil(EpisodeDetails?.duration / 3600000)}hr</p>
        </div>
      </article>
    </Link>
  );
};

export default VedioCard;
