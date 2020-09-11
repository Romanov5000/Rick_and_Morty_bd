import React from "react";
import { connect } from "react-redux";
import Episode from "../Episode";
import Paginator from "../Paginator";

class EpisodesList extends React.Component {
  render() {
    const { episodes } = this.props;
    console.log(episodes);
    const Episodeitems = episodes.map((item) => {
      return (
        <li key={item.id}>
          <Episode
            episodeName={item.name}
            episode={item.episode}
            episodeData={item.air_date}
          />
        </li>
      );
    });
    return (
      <>
        <div className="EpisodesList">
          <div>EpisodeList</div>
          <ul>{Episodeitems}</ul>
        </div>
        <Paginator />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  episodes: state.episodes,
});

export default connect(mapStateToProps)(EpisodesList);
