import React, { Component } from 'react';
import TimelineNode from '../TimelineNode';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectors: []
    };
  }

  // manage refs for timeline components
  // TODO use refs to access component positions and draw paths between them
  // NOTE could just call a draw function directly from div?
  drawConnector = component => {
    console.log(`offsets: ${component.offsetTop} (top), ${component.offsetLeft} (left)`);
  };

  render() {
    const { entries } = this.props;
    return (
      <div className="timeline">
        <div className="timeline-nodes">
          {entries.map((entry, i) => (
            <TimelineNode
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
