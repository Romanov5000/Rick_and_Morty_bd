import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const LocationPage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    const [name, locationName] = useState();
    const [dimension, locationDimension] = useState();
    const [type, locationType] = useState();

    useEffect(() =>  {
        async function getLocation(id) {
            const location = await rickMortyApi.getLocation(id);
            locationName(location.name);
            locationDimension(location.dimension);
            locationType(location.type);
        }
        

        getLocation(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="CharacterPage">
            <h1>{name}</h1>
            <div className="characterBlock">
                <div>{dimension}</div>
                <div>{type}</div>
            </div>
        </div>
    );
}

export default LocationPage;