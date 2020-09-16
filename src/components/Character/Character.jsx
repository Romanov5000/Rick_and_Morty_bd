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
      currentLocationUrl,
    } = this.props;

    let statusCircleClass = "statusCircle";
    let flex = "";

    let firstEpisodeId = firstEpisodeUrl.split("/");
    firstEpisodeId = firstEpisodeId[firstEpisodeId.length - 1];

    let currentLocationUrlId = currentLocationUrl.split("/");
    currentLocationUrlId =
      currentLocationUrlId[currentLocationUrlId.length - 1];

    if (status === "Alive") {
      statusCircleClass += " alive";
    } else if (status === "Dead") {
      statusCircleClass += " dead";
    }
    if (id % 2 === 0) {
      flex = "left";
    } else {
      flex = "right";
    }

    return (
      <div className={`Character ${flex}`}>
        <div className="imgBlock">
          <Link to={`/character/${id}`}>
            <img src={img} alt={name} width="100%" height="100%" />
          </Link>
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
            <p className="title">Current location:</p>
            <p className="location">
              <Link to={`/location/${currentLocationUrlId}`}>
                {currentLocation}
              </Link>
            </p>
          </div>
          <div className="firstSeenBlock">
            <p className="rem">First seen in:</p>
            <p className="firstEpisode">
              <Link to={`/episode/${firstEpisodeId}`}>{firstEpisodeName}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
