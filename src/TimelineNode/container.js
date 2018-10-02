import React from 'react';
import TimelineNode from './';
import TimelineMarker from '../TimelineMarker';
import _ from 'lodash';

class TimelineNodeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  createTimelineNode = () => (
    <TimelineNode
      direction={this.props.direction}
      title={this.props.entry.title}
      year={`${this.props.entry.year}`}
      content={this.props.entry.content}
    />
  );

  setVisibility = isVisible => this.setState({visible: isVisible});

  componentDidMount() {
    this.refs.timelineNode.style.opacity = 0.0;
    window.addEventListener('scroll', _.throttle(() => {
      console.log(`window: ${window.pageYOffset}, element: ${this.refs.timelineNode.offsetTop}`);
      window.pageYOffset > (this.refs.timelineNode.offsetTop - (window.scrollMaxY * 0.92)) && (
        this.setVisibility(true)
      )
    }, 300));
  }

  render() {
    const { entry, direction } = this.props;
    return(
      <div
        className={`timeline-row${this.state.visible ? ' timeline-row-fadein' : ''}`}
        ref="timelineNode"
        style={{
          ...styles.timelineRow,
          opacity: this.state.visible ? 100 : 0,
        }}
      >
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
