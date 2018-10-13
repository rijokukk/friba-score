import React, { Component } from 'react';

import './Scorecard.css';
import Game from '../../components/Game/Game';
import axios from 'axios';

class Scorecard extends Component {
    state = {
        name: null,
        holes: []
    }


    componentDidMount() {
        if (this.props.match.params.id) {
            axios.get('https://friba-score.firebaseio.com/tracks/' + this.props.match.params.id + '.json')
            .then(response => {
                const holes = [];
                for (const key in response.data.holes) {
                    holes.push({
                        hole: +key + 1,
                        par: response.data.holes[key],
                        throws: 0,
                        score: -response.data.holes[key]
                    })
                }
                this.setState({ name: response.data.name, holes: holes})
            })
            .catch(e => console.log(e));
        }
    }


    scoreUpdateHandler = (id, amount) => {
        const holes = [...this.state.holes];
        for (const key in holes) {
            if (holes[key].hole === id && holes[key].throws + amount >= 0) {
                holes[key].throws = holes[key].throws + amount;
                holes[key].score = holes[key].score + amount;
            } 
        }
        this.setState({ holes: holes })
    }

    render() {      
        return (
            <div className="Scorecard">
                    <h1>{this.state.name}</h1>
                    <Game
                        holes={this.state.holes}
                        clicked={this.scoreUpdateHandler} />
                </div>
            // <div>
            //     <p>Testi</p>
            // </div>
        );
    }
}

export default Scorecard;