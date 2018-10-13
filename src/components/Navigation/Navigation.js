import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navigation.css';

// Navigation bar. There is a list with single item, 
// because it is supposed to be extended with authentication.
const navigation = () => {
    return (
        <div className="Navigation">
            <header className="Header">
                <div className="Logo">
                    <NavLink to="/">FribaScore</NavLink>
                </div>
                <div className="Spacer"></div>
                <nav className="NavItems">
                    <ul className="NavList">
                        <li className="NavItem"><NavLink to="/rata-valinta">Uusi peli</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default navigation;