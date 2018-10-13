import React, { Component } from 'react';

import './FrontPage.css';
import { Link } from 'react-router-dom';
import axios from '../../axios-games';
import PreviousGames from '../../components/PreviousGames/PreviousGames';

// The frontpage of the app. Here you can see the previous games and start a new game.
class Frontpage extends Component {
    state = {
        previousGames: []
    }

    // Retrieves the previous games from the database.
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
                <div className="PrevGames">
                    <h2>Aiemmat pelit:</h2>
                    <PreviousGames
                        previousGames={this.state.previousGames} />
                </div>
            </div>
        )
    }
}

export default Frontpage;