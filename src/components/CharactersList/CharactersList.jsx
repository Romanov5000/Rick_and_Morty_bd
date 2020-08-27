import React from 'react';
import './CharactersList.css';
import Api from '../../API';
import Character from '../Character';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

class CharactersList extends React.Component {

    rickMortyApi = new Api();

    componentDidMount() {
        this.rickMortyApi.getAllCharacters()
            .then((data) => {
                this.props.setCharacters(data)
            });
    }
    
    render() {
        const { characters } = this.props;

        const items = characters.map((item) => {
            return (
                <li key={item.id}>
                    <Character
                        name={item.name}
                        img={item.image}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        currentLocation={item.location.name}
                        firstEpisodeUrl={item.episode[0]}
                        id={item.id}
                    />
                </li>
            );
        });

        if(!characters.length) {
            return <Spinner />
        }

        return (
            <div className="CharactersList">
                <h1>Characters</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCharacters: (data) => dispatch({
            type: 'IS_CHARACTERS',
            payload: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);