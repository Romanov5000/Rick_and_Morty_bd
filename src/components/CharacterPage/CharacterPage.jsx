import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API";

const CharacterPage = () => {
  let { id } = useParams();

  const rickAndMortyApi = new Api();

  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickAndMortyApi.getCharacter(id);
      console.log(character);
    }
    getCharacter(id)
  }, [id,rickAndMortyApi]);

  return (
    <div className="CharacterPage">
      <h1>Character name</h1>
      CharacterPage - {id}
    </div>
  );
};

export default CharacterPage;
