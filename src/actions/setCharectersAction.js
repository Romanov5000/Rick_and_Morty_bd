import Api from "../API";

const rickMortyApi = new Api();

export const setCharactersThunk = () => {
    return function(dispatch) {
      return  rickMortyApi.getAllCharacters().then(
        async (data) => {
          const characters = [];

          for(let i = 0; i<data.length; i++) {
            const firstEpisodeNameUrl = data[i].episode[0];
            const firstEpisodeName = await rickMortyApi.getEpisodeName(firstEpisodeNameUrl);
            const newObject = { ...data[i], firstEpisodeName};

            characters.push(newObject);
          }

          dispatch({
            type: 'IS_CHARACTERS',
            payload: characters
        })
        }
      );
    };
}