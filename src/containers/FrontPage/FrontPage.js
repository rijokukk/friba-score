import React, { Component } from 'react';

import './FrontPage.css';
import { Link } from 'react-router-dom';

class Frontpage extends Component {
    render() {
        return (
            <div className="FrontPage">
                <h1>FribaScore</h1>
                <Link to="/rata-valinta">Uusi peli</Link>
                <h2>Aiemmat pelit:</h2>
            </div>
        )
    }
}

export default Frontpage;