import React from 'react';
import './PreviousGame.css';

const previousGame = (props) => {
    return(
        <div className="PreviousGame">
            <h3>{props.date}</h3>
            <p>{props.track}</p>
            <p>Tulos: {props.score}</p>
        </div>
    )
}

export default previousGame;