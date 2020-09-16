import React from "react";
import { Link } from "react-router-dom";
import styles from "./Episode.module.css";

export default class Episode extends React.Component {
  render() {
    const { episodeName, episode, episodeData, id } = this.props;

    return (
      <div className={styles.Episode}>
        <div className={styles.episodeName}>
          <Link to={`/episode/${id}`}>{episodeName}</Link>
        </div>
        <ul>
          <li>Episode number: {episode}</li>
          <li>Release date: {episodeData}</li>
        </ul>
      </div>
    );
  }
}
