import React from 'react';
import TimelineNode from '../TimelineNode';
import TimelineMarker from '../TimelineMarker';
import { yearOffset } from '../utils/timeline';

const Timeline = ({ entries }) => {

  const dateRange = entries.reduce((extremeYears, entry) => ({
    low: Math.min(entry.year, extremeYears.low),
    high: Math.max(entry.year, extremeYears.high)
  }), {low: entries[0].year, high: entries[0].year});

  const createTimelineNode = (entry, i, dateDiff) => (
    <TimelineNode
      key={entry.id}
      direction={i % 2 ? "left" : "right"}
      title={entry.title}
      year={`${entry.year}`}
      content={entry.content}
      offsetTop={yearOffset(entry.year, dateRange.low, dateDiff)}
    />
  );

  const dateDelta = dateRange.high - dateRange.low;

  // TODO fix first timelineCenter div offsets left as window reaches horiz min

  return (
    <div className="timeline-test" style={styles.timeline}>
      {entries.map((entry, i) => (
        <div className="timeline-row" style={styles.timelineRow}>
          <div className="timeline-right-test" style={styles.timelineColumn}>
            {i % 2 ? createTimelineNode(entry, i, dateDelta) : ' '}
          </div>
          <div className="timeline-center-test" style={styles.timelineBar}>
            <TimelineMarker shape={`circle`} hasBorder={true} />
          </div>
          <div className="timeline-left-test" style={styles.timelineColumn}>
            {!(i % 2) && createTimelineNode(entry, i, dateDelta)}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  timeline: {
    maxWidth: '100%',
    width: '100%'
  },
  timelineRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto'
  },
  timelineBar: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: 'black'
  },
  timelineColumn: {
    flexGrow: 60,
    flexShrink: 60,
    flexBasis: 0
  }
};

export default Timeline;
