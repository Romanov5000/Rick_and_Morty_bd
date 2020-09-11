import React from "react";

export default class Episode extends React.Component {
  render() {
    const { episodeName, episode, episodeData } = this.props;

    return (
      <div className="Episode">
        <div className="episodeName">{episodeName}</div>
        <ul>
          <li>Episode number: {episode}</li>
          <li>Release date: {episodeData}</li>
        </ul>
      </div>
    );
  }
}
