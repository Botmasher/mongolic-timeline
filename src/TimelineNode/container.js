import React from 'react';
import TimelineNode from './';
import TimelineMarker from '../TimelineMarker';

export const TimelineNodeContainer = ({ entry, direction, offsetTop }) => {
  const createTimelineNode = () => (
    <TimelineNode
      direction={direction}
      title={entry.title}
      year={`${entry.year}`}
      content={entry.content}
      offsetTop={offsetTop}
    />
  );
  
  return(
    <div className="timeline-row-test" style={styles.timelineRow}>
      <div className="timeline-right-test" style={styles.timelineColumn}>
        {direction === 'left' ? createTimelineNode() : ' '}
      </div>
      <div className="timeline-center-test" style={styles.timelineBar}>
        <TimelineMarker shape={`circle`} hasBorder={true} />
      </div>
      <div className="timeline-left-test" style={styles.timelineColumn}>
        {direction === 'right' ? createTimelineNode() : ' '}
      </div>
    </div>
  );
};

const styles = {
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
