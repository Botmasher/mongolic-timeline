import React, { Component } from 'react';
import { TimelineNode } from '../TimelineNode';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refs: {}
    };
  }

  // manage refs for timeline components
  // TODO use refs to access component positions and draw paths between them
  // NOTE could just call a draw function directly from div?
  setRef = componentName => {
    if (this.state.refs.componentName) {
      return this.state.refs.componentName;
    }
    const newRef = React.createRef();
    this.setState({
      refs: {
        ...this.state.refs,
        component: newRef
      }
    });
    return newRef;
  };

  render() {
    const { entries } = this.props;
    return (
      <div className="timeline">
        <div className="timeline-nodes">
          {entries.map((entry, i) => (
            <TimelineNode
              setRef={this.setRef}
              key={entry.id}
              direction={i % 2 ? "left" : "right"}
              title={entry.title}
              year={`${entry.year}`}
              content={entry.content}
            />
          ))}
        </div>
        <div className="timeline-base">&nbsp;</div>
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`
        }}>
          {this.state.refs && Object.keys(this.state.refs).map(k => (
            console.log(k)
          ))}
          <path
            strokeWidth="5"
            stroke="red"
            fill="none"
            d={`
              M 0 0
              C 50, 10
                50,100
                100,100
            `}
          />
        </svg>
      </div>
    );
  }
}

export default Timeline;
