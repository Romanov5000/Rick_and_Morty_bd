import React from "react";
import { Link } from "react-router-dom";
import styles from "./Location.module.css";

export default class Location extends React.Component {
  render() {
    const { locationName, dimension, type, id } = this.props;

    return (
      <div className={styles.Location}>
        <div className={styles.locationName}>
          <Link to={`/location/${id}`}>{locationName}</Link>
        </div>
        <ul>
          <li>Episode number: {dimension}</li>
          <li>Release date: {type}</li>
        </ul>
      </div>
    );
  }
}
