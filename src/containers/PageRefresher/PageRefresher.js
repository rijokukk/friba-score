import React, { Component } from 'react';

// Keeps the Heroku server awake when this page is active
class PageRefresher extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.location.reload();
          }, 300000);
    }

    render() {
        return(
            <>
                <h1>Tämän sivun ainoa tarkoitus on pitää heroku palvelin hereillä...</h1>
            </>
        )
    }
}

export default PageRefresher;