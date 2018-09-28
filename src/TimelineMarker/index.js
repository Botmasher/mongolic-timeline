import React from 'react';
import colors from '../utils/colors';

const TimelineMarker = ({ shape, hasBorder }) => (
  <div style={styles.timelineMarkerContainer}>
    <div style={{
      ...styles.timelineMarkerShape,
      borderRadius: shape === 'circle' ? '50%' : 0,
      border: hasBorder ? '1px solid black' : 0
    }}>
      &nbsp;
    </div>
  </div>
);

const styles = {
  timelineMarkerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  timelineMarkerShape: {
    backgroundColor: colors.red,
    transform: 'scale(5, 1.5)'
  }
};

export default TimelineMarker;
