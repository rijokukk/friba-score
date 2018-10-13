import React from 'react';

import './Holes.css';
import Hole from './Hole/Hole';

// Holes are shown in the scorecard
const holes = (props) => props.holes.map(h => {
    return(
        <div key={h.hole} className="Holes">
            <Hole
                hole={h.hole}
                par={h.par}
                throws={h.throws}
                clicked={(amount) => props.clicked(h.hole, amount)} />
        </div>
    )
});

export default holes;