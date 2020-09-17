import React from "react";
import { connect } from "react-redux";
import Episode from "../Episode";
import Spinner from "../Spinner";
import Paginator from "../Paginator";
import { setEpisodesThunk } from "../../actions/setEpisodesAction";
import styles from "./EpisodeList.module.css";

class EpisodesList extends React.Component {
  render() {
    const { episodes } = this.props;
    const Episodeitems = episodes.map((item) => {
      return (
        <li key={item.id}>
          <Episode
            episodeName={item.name}
            episode={item.episode}
            episodeData={item.air_date}
            id={item.id}
          />
        </li>
      );
    });

    if (!episodes.length) {
      return <Spinner />;
    }

    return (
      <>
        <div className={styles.EpisodesList}>
          <h1>Episode List</h1>
          <ul>{Episodeitems}</ul>
        </div>
        <Paginator onPaginatorPage={setEpisodesThunk} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  episodes: state.episodes,
});

export default connect(mapStateToProps)(EpisodesList);
