import React from 'react';
import { Link } from 'react-router-dom';

import Beer from '../../img/beer.svg';

import './styles.scss';

const Header = () => {

    return (
        <header>
            <div className="container">
                <img src={Beer} alt="Beer" />
                <nav>
                    <ul>
                        <li><Link to="/">All beers</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/fav-beers">My fav beers</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;