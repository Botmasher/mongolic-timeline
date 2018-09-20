import React, { Component } from 'react';
import TimelineNode from '../TimelineNode';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdOffsets: false,
      dateOffsets: [],
      leftOffset: '',
      rightOffset: '',
      sVGPoints: []
    };
  }

  // TODO manage timeline connectors
  // - define svg draw function that just needs position from timelineNodes
  // - store drawn svgs as state
  // - iterate through state and update svgs per timeline node
  // NOTE this strategy separates connectors from timelineNode ui

  storeSVGPoints = (origX, origY, insertX, insertY) => {
    this.setState({
      sVGPoints: [
        ...this.state.sVGPoints,
        {
          origin: { x: origX, y: origY },
          target: { x: insertX, y: insertY }
        }
      ]
    })
  };

  setConnectorOffsets = () => {
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
    this.setConnectorOffsets();
  }

  render() {
    const { entries } = this.props;
    const { createdOffsets, dateOffsets, leftOffset, rightOffset, sVGPoints } = this.state;

    return (
      <div className="timeline-test" style={styles.timeline} ref="timeline">
        <div style={styles.timelineDraws}>
          {sVGPoints.map(pointSet => (
            <svg
              key={`timeline-connector-${pointSet.origin.x}-${pointSet.origin.y}-${pointSet.target.x}-${pointSet.target.x}`}
              viewBox="0 0 500 150"
              preserveAspectRatio="xMinYMin meet"
              x="50"
              y="0"
              style={{
                position: 'absolute',
                left: 0,
                top: 0
              }}
            >
              <path
                strokeWidth={2}
                stroke="gray"
                fill="none"
                d={`
                  M ${pointSet.origin.x} ${pointSet.origin.y}
                  C ${pointSet.origin.x+50}, ${pointSet.origin.y+10}
                    ${pointSet.origin.x+50}, ${pointSet.origin.y+50}
                    ${pointSet.target.x}, ${pointSet.target.y}
                `}
              />
            </svg>
          ))}
        </div>
        <div className="timeline-nodes-test">
          {createdOffsets && entries.map((entry, i) => (
            <TimelineNode
              offsetTop={dateOffsets[i]}
              offsetLeft={leftOffset}
              offsetRight={rightOffset}
              storeSVGPoints={this.storeSVGPoints}
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
    zIndex: 0
  },
  timelineDraws: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    opacity: 0.1,
    zIndex: 1
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
