import React from 'react';
import TimelineNode from '../TimelineNode';
//import { moment } from 'moment';

// TODO format dates and support different calendars
//  - "1000 BCE" from -1, "1000 CE" from 1

const Timeline = ({ entries }) => {

  const offsetDate = (year, origin, range) => {
    console.log(year - origin);
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
      <div className="timeline-column-left-test" style={styles.timelineColumn}>&nbsp;</div>
      <div className="timeline-column-center-test" style={styles.timelineBar}>&nbsp;</div>
      <div className="timeline-column-right-test">
        <div className="timeline-nodes-test" style={styles.timelineColumn}>
          {entries.map((entry, i) => (
            <TimelineNode
              key={entry.id}
              direction={i % 2 ? "left" : "right"}
              title={entry.title}
              year={`${entry.year}`}
              content={entry.content}
              offsetTop={offsetDate(entry.year, dateRange.low, dateDelta)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  timeline: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%'
  },
  timelineBar: {
    width: '4%',
    backgroundColor: 'black'
  },
  timelineColumn: {
    width: '48%',
  }
};

export default Timeline;
