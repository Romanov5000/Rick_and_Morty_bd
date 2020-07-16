import React from 'react';
import './CharacterList.css';
import Api from '../../API';

export default class CharacterList extends React.Component {
 
    rickMortyApi = new Api();

    componentDidMount() {
        const CharactersArr = this.rickMortyApi.getAllCharacters()
        .then((data) => data);
        console.log(CharactersArr);
    }
    render() {
    return (
        <div className='CharacterList'>
            <h1>Character</h1>
            <ul>
                
            </ul>
        </div>
        
    );
    }
}
