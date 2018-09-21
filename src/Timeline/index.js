import React from 'react';
import TimelineNode from '../TimelineNode';
//import { moment } from 'moment';

// TODO format dates and support different calendars
//  - "1000 BCE" from -1, "1000 CE" from 1

const Timeline = ({ entries }) => {

  const offsetDate = (year, origin, range) => {
    const dateRatio = (year - origin) / range;
    return dateRatio;
  };

  const dateRange = entries.reduce((extremeYears, entry) => ({
    low: Math.min(entry.year, extremeYears.low),
    high: Math.max(entry.year, extremeYears.high)
  }), {low: entries[0].year, high: entries[0].year});

  const dateDelta = dateRange.high - dateRange.low;

  return (
    <div className="timeline-test" style={styles.timeline}>
      <div className="timeline-nodes-test">
        {entries.map((entry, i) => (
          <TimelineNode
            key={entry.id}
            direction={i % 2 ? "left" : "right"}
            title={entry.title}
            year={`${entry.year}`}
            content={entry.content}
            offsetTop={() => offsetDate(entry.year, dateRange.low, dateDelta)}
          />
        ))}
      </div>
      <div className="timeline-base-test" style={styles.timelineBar}>&nbsp;</div>
    </div>
  );
};

const styles = {
  timeline: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  timelineBar: {
    position: 'absolute',
    width: '2%',
    top: 0,
    left: '49%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 2
  }
};

export default Timeline;
