import React from 'react';
import './App.css';
import TimelineContainer from './Timeline/Container';
import { Header } from './Header';
import { timelineEntries } from './store';

const App = () => (
  <div className="App">
    <Header />
    <TimelineContainer entries={Object.values(timelineEntries)} />
  </div>
);

export default App;
