import React from 'react';
import './CharacterList.css';
import Api from '../../API';
import Character from '../Character';

export default class CharacterList extends React.Component {
 
    rickMortyApi = new Api();

    state = {
        characters: [],
    }

    componentDidMount() {
        this.rickMortyApi.getAllCharacters()
        .then((data) => this.setState({
            characters:data,
        }));
    }
    render() {
        const {characters} = this.state;
        const items = characters.map((item) => {
            console.log(item);
            return (
                <li  key = {item.id}>
                <Character
                name = {item.name}
                img= {item.image}
                species = {item.species}
                gender = {item.gender}
                status = {item.status}
                curentLocation={item.location.name}
                firstEpisode = {item.episode[0]}
                />
                </li>
            );
        })
    return (
        <div className='CharacterList'>
            <h1>Character</h1>
            <ul>
                {items}
            </ul>
        </div>
        
    );
    }
}
