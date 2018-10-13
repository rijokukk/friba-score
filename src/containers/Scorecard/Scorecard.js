import React, { Component } from 'react';

import './Scorecard.css';
import Holes from '../../components/Holes/Holes';
import axiosTracks from '../../axios-tracks';
import axiosGames from '../../axios-games';

// Page for the scorecard.
class Scorecard extends Component {
    state = {
        name: null,
        holes: []
    }

    // Retrieves the selected track from database and save it to the state
    componentDidMount() {
        if (this.props.match.params.id) {
            axiosTracks.get('/' + this.props.match.params.id + '.json')
                .then(response => {
                    const holes = [];
                    for (const key in response.data.holes) {
                        holes.push({
                            hole: +key + 1,
                            par: response.data.holes[key],
                            throws: 1,
                            score: -response.data.holes[key] + 1
                        })
                    }
                    this.setState({ name: response.data.name, holes: holes })
                })
                .catch(e => console.log(e));
        }
    }

    // Updates the score of the round when the throws are modified
    scoreUpdateHandler = (id, amount) => {
        const holes = [...this.state.holes];
        for (const key in holes) {
            if (holes[key].hole === id && holes[key].throws + amount >= 1) {
                holes[key].throws = holes[key].throws + amount;
                holes[key].score = holes[key].score + amount;
            }
        }
        this.setState({ holes: holes })
    }

    // Calculates the final score and save the scorecard to the database
    finishGameHandler = () => {
        let finalScore = 0;
        for (const key in this.state.holes) finalScore = finalScore + this.state.holes[key].score;

        const result = {
            track: this.state.name,
            score: finalScore,
            date: '13.10.2018'
        }
        axiosGames.post('', result)
            .then(this.props.history.push('/'))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <Holes
                    holes={this.state.holes}
                    clicked={this.scoreUpdateHandler} />
                <button className="Button" onClick={this.finishGameHandler}>
                    Lopeta peli
                </button>
            </>
        );
    }
}

export default Scorecard;