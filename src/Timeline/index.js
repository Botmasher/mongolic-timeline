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
