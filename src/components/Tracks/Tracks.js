import React from 'react';
import './Tracks.css';
import Track from './Track/Track';
import { Link } from 'react-router-dom';

const Tracks = (props) => props.tracks.map(t => {

    return (
        <div className="Link">
            <Link to={'/uusi-peli/' + t.id} key={t.id}>
                <div className="Tracks" >
                    <Track 
                        name={t.name}
                        holes={t.holes.length} />
                </div>
            </Link>
        </div>
    )
});


export default Tracks;