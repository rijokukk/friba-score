import React from 'react';

import './Hole.css';

// A single hole layout
const hole = (props) => {
    return(
        <div className="Hole">
            <h3>Väylä {props.hole} <small>(PAR {props.par})</small></h3>
            <p>Heitot:</p>
            <div className="FlexContainer">
                <button onClick={() => props.clicked(-1)}><i className="fas fa-minus"></i></button>
                <h4 className="Throws">{props.throws}</h4>
                <button onClick={() => props.clicked(1)}><i className="fas fa-plus"></i></button>
            </div>
        </div>
    )
};

export default hole;