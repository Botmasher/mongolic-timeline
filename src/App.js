import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline';
import { Header } from './Header';
import { timelineEntries } from './store';

const App = () => (
  <div className="App">
    <Header />
    <Timeline entries={Object.values(timelineEntries)} />
  </div>
);

export default App;
