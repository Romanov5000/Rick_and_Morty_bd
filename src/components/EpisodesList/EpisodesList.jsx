import React from "react";
import Api from "../../API";
import { connect } from "react-redux";

class EpisodesList extends React.Component {
    // rickMortyApi = new Api();


  render() {
      const { episodes } = this.props;
      console.log(episodes);
    return <div className="EpisodesList">EpisodesList</div>;
  }
}

const mapStateToProps = (state) => ({
  episodes: state.episodes,
  });
  

  export default connect(mapStateToProps)(EpisodesList);

