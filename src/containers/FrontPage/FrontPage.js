import React, { Component } from 'react';

import './FrontPage.css';
import { Link } from 'react-router-dom';
import axios from '../../axios-games';
import PreviousGames from '../../components/PreviousGames/PreviousGames';

class Frontpage extends Component {
    state = {
        previousGames: []
    }

    componentDidMount() {
        axios.get()
            .then(response => {
                const games = [];
                for (const key in response.data) {
                    games.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ previousGames: games })
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="FrontPage">
                <h1>FribaScore</h1>
                <div className="NewGame">
                    <Link to="/rata-valinta">Uusi peli</Link>
                </div>
                <h2>Aiemmat pelit:</h2>
                <PreviousGames
                    previousGames={this.state.previousGames} />
            </div>
        )
    }
}

export default Frontpage;