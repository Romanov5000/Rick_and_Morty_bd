import React from "react";

export default class Location extends React.Component {
  render() {
    const { locationName, dimension, type } = this.props;

    return (
      <div className="Episode">
        <div className="episodeName">{locationName}</div>
        <ul>
          <li>Episode number: {dimension}</li>
          <li>Release date: {type}</li>
        </ul>
      </div>
    );
  }
}