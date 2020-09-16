import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";
import { Link } from "react-router-dom";
import styles from "./CharacterPage.module.css";

const CharacterPage = () => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [image, setImage] = useState();
  const [species, setSpecies] = useState();
  const [status, setStatus] = useState();
  const [location, setLocarion] = useState();
  const [locationUrl, setLocarionUrl] = useState();

  let locationHome = <div></div>;
  if (locationUrl) {
    let currentLocationUrlId = locationUrl.split("/");
    currentLocationUrlId =
      currentLocationUrlId[currentLocationUrlId.length - 1];

    locationHome = (
      <div>
        <Link to={`/location/${currentLocationUrlId}`}>{location}</Link>
      </div>
    );
  }

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      setName(character.name);
      setGender(character.gender);
      setImage(character.image);
      setSpecies(character.species);
      setStatus(character.status);
      setLocarion(character.location.name);
      setLocarionUrl(character.location.url);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  return (
    <div className={styles.CharacterPage}>
      <div className={styles.CharacterPageDark}>
        <div className={styles.characterBlock}>
          <div className={styles.characterImg}>
            <img src={image} alt={`${name}`} />
          </div>
          <div className={styles.characterInfoBlock}>
            <div className={styles.characterInfo}>Name - {name}</div>
            <div className={styles.characterInfo}>Gender - {gender}</div>
            <div className={styles.characterInfo}>Race - {species}</div>
            <div className={styles.characterInfo}>Status - {status}</div>
            <div className={styles.characterInfo}>Home planet:</div>
            {locationHome}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
