import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mongolic Timeline</h1>
        <p>relationships between Middle Mongol, Written Mongol, Proto-Mongolic and the modern Mongolic languages, including Mongolian proper</p>
        <div className="timeline">
          <div className="note">
            <h2>Written Mongol</h2>
            <p>the standardized, official written language in the Mongolian script</p>
          </div>
          <div className="note">
            <h2>Middle Mongol</h2>
            <p>the language of the imperial period captured in the Secret History</p>
          </div>
          <div className="note">
            <h2>Proto-Mongolic</h2>
            <p>the language reconstructed from the many modern Mongolic varieties</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
