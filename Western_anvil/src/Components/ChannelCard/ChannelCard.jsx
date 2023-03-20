import React from "react";
import { Link } from "react-router-dom";
import "./ChannelCard.css";
const ChannelCard = ({ ChannelsList }) => {
  const str = ChannelsList?.keywords;
  return (
    <article className="ChannelCard">
      <Link to={`/channeldetails/${ChannelsList?.cid}`}>
        <figure className="ChannelCard-Img-container">
          <img src={ChannelsList?.https_cover_url} alt="Channel Img" />
        </figure>
      </Link>
      <section className="Discription">
        <h1>
          Author :-
          <span>{ChannelsList?.author}</span>
        </h1>
        <h4>
          Episodes :-
          <span>{ChannelsList?.episode_count}</span>
        </h4>
        <h5>
          Category :-
          <span>
            {str.toString().split("").length > 30
              ? `${str.toString().substring(0, 30)}...`
              : str}{" "}
          </span>
        </h5>
        <h5>
          Subscribers :-
          <span>{ChannelsList?.sub_count}</span>
        </h5>
      </section>
    </article>
  );
};

export default ChannelCard;
