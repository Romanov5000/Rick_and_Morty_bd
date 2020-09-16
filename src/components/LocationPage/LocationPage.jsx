import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";
import style from "./LocationPage.module.css";

const LocationPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, locationName] = useState();
  const [dimension, locationDimension] = useState();
  const [type, locationType] = useState();

  useEffect(() => {
    async function getLocation(id) {
      const location = await rickMortyApi.getLocation(id);
      locationName(location.name);
      locationDimension(location.dimension);
      locationType(location.type);
    }

    getLocation(id);
  }, [id, rickMortyApi]);

  return (
    <div className={style.CharacterPage}>
      <div className={style.characterBlock}>
        <h1>{name}</h1>
        <div>{dimension}</div>
        <div>{type}</div>
      </div>
    </div>
  );
};

export default LocationPage;
