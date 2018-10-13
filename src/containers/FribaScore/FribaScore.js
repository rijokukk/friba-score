import React, { Component } from 'react';

import TrackChooser from '../TrackChooser/TrackChooser';
import Scorecard from '../Scorecard/Scorecard';
import FrontPage from '../FrontPage/FrontPage';
import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';

// Sets the routes for the app
class FribaScore extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Route path="/" exact component={FrontPage} />
                <Switch>
                    <Route path="/rata-valinta" component={TrackChooser} />
                    <Route path="/uusi-peli/:id" exact component={Scorecard} />
                </Switch>
            </>
        )
    }
}

export default FribaScore;