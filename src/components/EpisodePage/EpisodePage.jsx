import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";
import style from "./EpisodePage.module.css";

const EpisodePage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [data, episodeData] = useState();
  const [episode, episodeNumber] = useState();

  useEffect(() => {
    async function getEpisode(id) {
      const episode = await rickMortyApi.getEpisode(id);
      setName(episode.name);
      episodeData(episode.air_date);
      episodeNumber(episode.episode.toLowerCase());
    }

    getEpisode(id);
  }, [id, rickMortyApi]);

  let episodVideoUrl = <div></div>;

  if (episode) {
    episodVideoUrl = (
      <div>
        <video
          controls
          width="950"
          height="538"
          poster="/examples/media/martynko.png"
          preload="none"
        >
          <source
            src={`https://vs1.cdnlast.com/s/85c598692a53a681dfbb97bf21c7242b/rick.and.morty.2013.siendyk-nf20/${episode}_720.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }

  return (
    <div className={style.EpisodePage}>
      <div className={style.episodeBlock}>
        <h1>{name}</h1>
        <div>{episode}</div>
        <div>{data}</div>
        {episodVideoUrl}
      </div>
    </div>
  );
};

export default EpisodePage;
