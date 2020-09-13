import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const EpisodePage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    const [name, setName] = useState();
    const [data, episodeData] = useState();
    const [episode, episodeNumber] = useState();

    useEffect(() =>  {
        async function getEpisode(id) {
            const episode = await rickMortyApi.getEpisode(id);
            setName(episode.name);
            episodeData(episode.air_date);
            episodeNumber(episode.episode);
        }

        getEpisode(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="CharacterPage">
            <h1>{name}</h1>
            <div className="characterBlock">
                <div>{episode}</div>
                <div>{data}</div>
            </div>
        </div>
    );
}

export default EpisodePage;