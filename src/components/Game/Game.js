import React from 'react';

import './Game.css';
import Holes from '../Holes/Holes';

const game = (props) => {
    return (
        <Holes 
            holes={props.holes}
            clicked={props.clicked} />
    )
}

export default game;