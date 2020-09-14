import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";

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

if (episode){
     
     episodVideoUrl = <div>
         <video
          controls
          width="710"
          height="538"
          poster="/examples/media/martynko.png"
          preload="none"
        >
          <source src={`https://vs1.cdnlast.com/s/683c3595441c09782f930d2a791807eb/rick.and.morty.2013.siendyk-nf20/${episode}_720.mp4`} type="video/mp4" />
        </video>
     </div>
    }
  

  return (
    <div className="EpisodePage">
      <h1>{name}</h1>
      <div className="episodeBlock">
        <div>{episode}</div>
        <div>{data}</div>
        {episodVideoUrl}
      </div>
    </div>
  );
};

export default EpisodePage;
