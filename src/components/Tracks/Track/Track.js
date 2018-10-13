import React from 'react';
import './Track.css';

const track = (props) => {
    return(
        <div className="Track">
            <h3>{props.name}</h3>
            <p>Väylät: {props.holes}</p>
        </div>
    )
}

export default track;