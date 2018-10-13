import React from 'react';
import './Tracks.css';
import Track from './Track/Track';
import { Link } from 'react-router-dom';

// Tracks are displayed when choosing a new game
const tracks = (props) => props.tracks.map(t => {
    return (
        <div className="Link" key={t.id}>
            <Link to={'/uusi-peli/' + t.id}>
                <div className="Tracks" >
                    <Track
                        name={t.name}
                        holes={t.holes.length} />
                </div>
            </Link>
        </div>
    )
});


export default tracks;