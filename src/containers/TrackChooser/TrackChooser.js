import React, { Component } from 'react';

import axios from '../../axios-tracks';
import Tracks from '../../components/Tracks/Tracks';

// Page for choosing a track when selecting new game
class TrackChooser extends Component {
    state = {
        tracks: []
    }

    // Get the tracks from database and them to state
    componentDidMount() {
        axios.get('.json')
            .then(response => {
                const tracks = [];
                for (const key in response.data) {
                    tracks.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ tracks: tracks })
            })
            .catch(e => console.log(e));
    }


    render() {
        return (
            <>
                <h1>Valitse rata</h1>
                <Tracks
                    tracks={this.state.tracks} />
            </>
        )
    }
}

export default TrackChooser;