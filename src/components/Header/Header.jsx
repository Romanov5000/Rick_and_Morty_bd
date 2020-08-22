import React from 'react';
//import './Header.css';
import styles from './Header.module.css';
import Nav from '../Nav';
import styled from 'styled-components';

const P = styled.p`
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    margin: 0;
`;

const Header = () => {
    return (
        <div className={`Header ${styles.Header}`} >
            <div className="title_block" ><P>Rick & Morty BD</P></div>
            <div className="nav_block" >
                <Nav />
            </div>
        </div>
    );
}

export default Header;