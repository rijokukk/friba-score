import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import FribaScore from '../FribaScore/FribaScore';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <FribaScore />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
