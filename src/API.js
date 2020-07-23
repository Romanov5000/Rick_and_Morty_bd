import axios from "axios";



export default class RickApi {
    instance = axios.create ({
        baseURL: 'https://rickandmortyapi.com/api/'
    });

     getAllCharacters = async () => {
        const response = await this.instance.get('character');
        const result = response.data.results;
        return result;
    }
    getCharacter = async (id) => {
        const response = await this.instance.get(`character/${id}`);
        const result = response.data;
        return result;
    }

    getEpisodeName = async (url) => {
        this.instance.defaults.baseURL="";
        const response = await this.instance.get(url);
        const result = response.data.name;
        return result;
    }
}




