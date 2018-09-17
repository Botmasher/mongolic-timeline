import React, { Component } from 'react';
import TimelineNode from '../TimelineNode';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdOffsets: false,
      dateOffsets: [],
      leftOffset: '',
      rightOffset: ''
    };
  }

  // manage refs for timeline components
  // TODO use refs to access component positions and draw paths between them
  // NOTE could just call a draw function directly from div?
  drawConnector = component => {
    console.log(`offsets: ${component.offsetTop} (top), ${component.offsetLeft} (left)`);
  };

  setupConnectorDimensions = () => {
    if (!this.refs.timeline || this.state.createdOffsets) return;

    const dates = this.props.entries.map(entry => entry.year);

    // TODO calculate positioning for connectors along timeline
    const timelinePosStart = this.refs.timeline.offsetTop;
    const timelinePosEnd = timelinePosEnd + this.refs.timeline.height;
    const dateOffsetFactors = dates.map(date => date / dates[0]);

    const dateOffsets = dateOffsetFactors.map(offset => offset);

    // TODO left vs right offsets? (for connecting to child node div position)
    // or setup both svg and node in absolute?
    const rightOffset = 0;
    const leftOffset = Math.round(this.refs.timeline.width * 0.5);
    this.setState({
      createdOffsets: true,
      dateOffsets,
      leftOffset,
      rightOffset
    });
  };

  componentDidMount() {
    console.log(this.refs.timeline);
    this.setupConnectorDimensions();
  }

  render() {
    const { entries } = this.props;
    const { dateOffsets, leftOffset, rightOffset } = this.state;
    return (
      <div className="timeline-test" style={styles.timeline} ref="timeline">
        <div className="timeline-nodes-test">
          {entries.map((entry, i) => (
            <TimelineNode
              offsetTop={dateOffsets[i]}
              offsetLeft={leftOffset}
              offsetRight={rightOffset}
              drawConnector={this.drawConnector}
              key={entry.id}
              direction={i % 2 ? "left" : "right"}
              title={entry.title}
              year={`${entry.year}`}
              content={entry.content}
            />
          ))}
        </div>
        <div className="timeline-base-test" style={styles.timelineBar}>&nbsp;</div>
      </div>
    );
  }
}

const styles = {
  timeline: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'cyan',
    zIndex: 0
  },
  timelineBar: {
    position: 'absolute',
    width: '1%',
    top: 0,
    left: '50%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 1
  }
};

export default Timeline;
