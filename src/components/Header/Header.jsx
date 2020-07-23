import React from 'react';
import './Header.css';
import Nav from '../Nav';

const Header = () => {
    return (
        <div className= 'Header'>
            <div className='title_block'><p>Rick and Morty bd</p></div>
            <div className='nav_block'>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;