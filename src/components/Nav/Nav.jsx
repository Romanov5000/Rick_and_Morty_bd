import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return(
        <div className='Nav'>
            <Link to="/Characters">Characters</Link>
            <Link to="/Episodes">Episodes</Link>
            <Link to="/Locations">Locations</Link>
        </div>
    );
}


export default Nav;