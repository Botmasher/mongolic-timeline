import React, { Component } from 'react';
import TimelineNode from '../TimelineNode';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        top: 0,
        left: 0,
      }
    };
  }

  // manage refs for timeline components
  // TODO use refs to access component positions and draw paths between them
  // NOTE could just call a draw function directly from div?
  drawConnector = component => {
    console.log(`offsets: ${component.offsetTop} (top), ${component.offsetLeft} (left)`);
  };

  setupConnectorDimensions = () => {
    if (!this.refs.timeline) return;

    dates = [1150, 1200, 1227, 1300, 1500, 1750, 1900];

    // TODO calculate positioning for connectors along timeline
    const timelinePosStart = this.refs.timeline.offsetTop;
    const timelinePosEnd = timelinePosEnd + this.refs.timeline.height;
    const dateOffsetFactors = dates.map(date => date / dates[0]);

    const dateOffsets = dateOffsetFactors.map(offset => timelinePosStart * offset);

    // TODO left vs right offsets? (for connecting to child node div position)
    // or setup both svg and node in absolute?
  };

  componentDidMount() {
    if (!this.refs.timeline) return;
    console.log(this.refs.timeline);
    this.setState({
      offset: {
        ...this.state.offset,
        top: this.refs.timeline.offsetTop
      }
    });
  }

  render() {
    const { entries } = this.props;
    const { offset } = this.state;
    const offsetFactor = 154;
    return (
      <div className="timeline" ref="timeline">
        <div className="timeline-nodes">
          {entries.map((entry, i) => (
            <TimelineNode
              offsetTop={(offset.top) + (i * offsetFactor)}
              drawConnector={this.drawConnector}
              key={entry.id}
              direction={i % 2 ? "left" : "right"}
              title={entry.title}
              year={`${entry.year}`}
              content={entry.content}
            />
          ))}
        </div>
        <div className="timeline-base">&nbsp;</div>
      </div>
    );
  }
}

export default Timeline;
