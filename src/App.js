import React, { Component } from 'react';
import './App.css';
import { Timeline } from './Timeline';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
      </div>
    );
  }
}

export default App;
