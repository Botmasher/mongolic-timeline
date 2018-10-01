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
      offsetTop={this.props.offsetTop}
    />
  );

  fade = (out=false) => {
    if (this.state.visible && !this.out) return;
    this.setState({visible: true}, () => {
      const e = this.refs.timelineNode;
      let opacity = out ? 1.0 : 0.0;
      const opacityTarget = out ? 0.0 : 1.0;
      const fx = setInterval(() => {
        if (opacityTarget - opacity <= 0.0) e.style.opacity = opacityTarget;
        e.style.opacity = opacity;
        e.style.filter = `alpha(opacity=${opacity * 100})`;
        opacity += (out ? -0.05 : 0.05);
      }, 70);
      console.log(`fading in ${this.refs.timelineNode}`);
    });
  };

  componentDidMount() {
    this.refs.timelineNode.style.opacity = 0.0;
    window.addEventListener('scroll', _.throttle(() => {
      console.log(window.screen);
      window.scrollMaxY > this.props.offsetTop
        ? this.fade()
        : console.log(`not fading...`)
      ;
    }, 900));
  }

  render() {
    const { entry, direction, offsetTop } = this.props;
    return(
      <div className="timeline-row-test" style={styles.timelineRow} ref="timelineNode">
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
