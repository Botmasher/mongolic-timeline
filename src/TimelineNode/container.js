import React from 'react';
import TimelineNode from './';
import TimelineMarker from '../TimelineMarker';

class TimelineNodeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  createTimelineNode = () => (
    <TimelineNode
      direction={this.props.direction}
      title={this.props.entry.title}
      year={`${this.props.entry.year}`}
      content={this.props.entry.content}
      offsetTop={this.props.offsetTop}
    />
  );

  componentDidMount() {
    window.scroll(() => (
      window.scrollTop() > this.props.offsetTop
      ? this.refs.tnode.fadeIn()
      : this.refs.tnode.fadeOut()
    ));
  }

  render() {
    const { entry, direction, offsetTop } = this.props;
    return(
      <div className="timeline-row-test" style={styles.timelineRow}>
        <div className="timeline-right-test" style={styles.timelineColumn}>
          {direction === 'left' ? this.createTimelineNode() : ' '}
        </div>
        <div className="timeline-center-test" style={styles.timelineBar}>
          <TimelineMarker shape={`circle`} hasBorder={true} />
        </div>
        <div className="timeline-left-test" style={styles.timelineColumn}>
          {direction === 'right' ? this.createTimelineNode() : ' '}
        </div>
      </div>
    );
  }
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

export default TimelineNodeContainer;
