import React from 'react';
import './Character.css';
import Api from '../../API';
import { Link } from "react-router-dom";

export default class Character extends React.Component {
    rickMortyApi = new Api();

    state = {
        firstEpisodeName: null,
        id: 14,
    }

    componentDidMount() {
        this.rickMortyApi.getEpisodeName(this.props.firstEpisode)
        .then((name) => {
            this.setState({
                firstEpisodeName: name, 
            });
        })
    }

    render () {

    const {firstEpisodeName} = this.state;
    const {name, img, gender, species, status, curentLocation } = this.props;
    let statusCircl = 'statusCircl';

    if (status === 'Alive') {
        statusCircl+= ' alive';
    } else if (status === 'Dead') {
        statusCircl+= ' dead';
    }
    
    return (
        <div className='Character'>
            <div className='imgBlock'>
                <Link to={`/Character/${this.state.id}`}>
                <img src = {img} alt= {name} />
                </Link>
            </div>
            <div className='textBlock'>
            <p className = 'name'>{name}</p>
            <p className='status'>
                <span className={statusCircl}> </span>
                <span className='statusText'>{status} </span>
                <span> - </span>
                <span className='species'>{species}</span>
                <span className='gender'>{gender} </span>
            </p>
            <div className='locationBlock'>    
                <p>Curent location</p>
                <p>{curentLocation}</p>    
            </div>
            <div className='firtSeenBlock'>
                <p>First episode</p>
                <p>{firstEpisodeName}</p>
            </div>
            </div>
            
        </div>
    )
    
}
}

