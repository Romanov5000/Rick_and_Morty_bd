import React from "react";

import { Link } from "react-router-dom";

export default class Location extends React.Component {
  render() {
    const { locationName, dimension, type, id } = this.props;

    return (
      <div className="Location">
        <div className="locationName">
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
