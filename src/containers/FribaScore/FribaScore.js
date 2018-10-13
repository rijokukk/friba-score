import React, {Component} from 'react';

import './FribaScore.css';
import TrackChooser from '../TrackChooser/TrackChooser';
import Scorecard from '../Scorecard/Scorecard';
import FrontPage from '../FrontPage/FrontPage';
import { Route, Switch } from 'react-router-dom';

class FribaScore extends Component {
    render() {
        return (
            <div className="FribaScore">
                <Route path="/" exact component={FrontPage} />
                <Switch>
                    <Route path="/track-chooser" component={TrackChooser} />
                    <Route path="/uusi-peli/:id" exact component={Scorecard} />
                </Switch>
            </div>
        )
    }
}

export default FribaScore;