import React from "react";

import "./Character.css";
import { Link } from "react-router-dom";

export default class Character extends React.Component {
  render() {
    const {
      name,
      img,
      status,
      species,
      gender,
      currentLocation,
      firstEpisodeName,
      firstEpisodeUrl,
      id,
    } = this.props;
    // console.log(firstEpisodeUrl);

    let statusCircleClass = "statusCircle";

    let firstEpisodeId = firstEpisodeUrl.split("/");
    firstEpisodeId = firstEpisodeId[firstEpisodeId.length - 1];

    if (status === "Alive") {
      statusCircleClass += " alive";
    } else if (status === "Dead") {
      statusCircleClass += " dead";
    }

    return (
      <div className="Character">
        <div className="imgBlock">
          <img src={img} alt={name} />
        </div>
        <div className="textBlock">
          <div className="titleBlock">
            <p className="name">
              <Link to={`/character/${id}`}>{name}</Link>
            </p>
            <p className="status">
              <span className={statusCircleClass}></span>
              <span className="statusText">{status}</span>
              <span>-</span>
              <span className="species">{species}</span>
              <span className="gender">{gender}</span>
            </p>
          </div>
          <div className="locationBlock">
            <p className="title">Current location</p>
            <p className="location">{currentLocation}</p>
          </div>
          <div className="firstSeenBlock">
            <p className="title">First seen in:</p>
            <p className="firstEpisode">
              <Link to={`/episode/${firstEpisodeId}`}>{firstEpisodeName}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
