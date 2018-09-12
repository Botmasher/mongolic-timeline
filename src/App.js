import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline';
import { Header } from './Header';

const store = {
  timeline: {
    'written-mongol': {
      id: 'preclassical-written-mongol',
      year: 1200,
      title: 'Preclassical Written Mongol',
      content: 'the standardized, unified written language in the Mongolian script'
    },
    'middle-mongol': {
      id: 'middle-mongol',
      year: 1200,
      title: 'Middle Mongol',
      content: 'the language of the imperial period captured in the Secret History'
    },
    'proto-mongolic': {
      id: 'proto-mongolic',
      year: 1200,
      title: 'Proto-Mongolic',
      content: 'the language reconstructed from the many modern Mongolic varieties'
    },
    'classical-written-mongol': {
      id: 'classical-written-mongolian',
      year: 1600,
      title: 'Classical Written Mongol',
      content: 'the language of premodern texts in the Mongolian script such as the Kanjur and Tanjur'
    },
    'modern-mongolian': {
      id: 'modern-mongolian',
      year: 1900,
      title: 'Modern Mongolian',
      content: 'the language of the modern state of Mongolia, a standardized form of Khalkha written in Cyrillic'
    },
    'mongolic-family': {
      id: 'mongolic-family',
      year: 2018,
      title: 'Mongolic family',
      content: 'the languages and dialects that have descended from Proto-Mongolic and rapidly diversified to the present day'
    }
  }
};

// const getOffsetLeft = eTag => {
//   const e = document.getElementsByTagName(eTag)[0];
//   console.log(e.offsetLeft);
//   return e
//     ? e.offsetLeft
//     : 0
//   ;
// };
//
// const getOffsetTop = eTag => {
//   const e = document.getElementsByTagName(eTag)[0];
//   return e
//     ? e.offsetTop
//     : 0
//   ;
// };

class App extends Component {
  render() {
    const entries = store.timeline;
    return (
      <div className="App">
        <Header />
        <Timeline entries={Object.values(entries)} />
      </div>
    );
  }
}

export default App;
