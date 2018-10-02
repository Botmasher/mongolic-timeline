import React from 'react';
import TimelineNodeContainer from '../TimelineNode/Container';
import { yearOffset } from '../utils/timeline';

const Timeline = ({ entries }) => {

  const dateRange = entries.reduce((extremeYears, entry) => ({
    low: Math.min(entry.year, extremeYears.low),
    high: Math.max(entry.year, extremeYears.high)
  }), {low: entries[0].year, high: entries[0].year});

  const dateDelta = dateRange.high - dateRange.low;

  // TODO fix first timelineCenter offsets left as window reaches horiz min

  return (
    <div className="timeline-test" style={styles.timeline}>
      {entries.map((entry, i) => (
        <TimelineNodeContainer
          key={entry.id}
          entry={entry}
          direction={i % 2 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

const styles = {
  timeline: {
    maxWidth: '100%',
    width: '100%',
    marginBottom: 30
  }
};

export default Timeline;
