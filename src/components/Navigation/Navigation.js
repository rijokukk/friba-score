import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navigation = () => {
    return (
        <div className="Navigation">
            <header className="Header">
                <div class="Logo">
                    <NavLink to="/">FribaScore</NavLink>
                </div>
                <div class="Spacer"></div>
                <nav className="NavItems">
                    <ul className="NavList">
                        <li className="NavItem"><NavLink to="/rata-valinta">Uusi peli</NavLink></li>
                        <li className="NavItem"><NavLink exact to="/">Kirjaudu</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default navigation;