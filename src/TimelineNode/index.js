import React from 'react';

class TimelineNode extends React.Component {

	constructor(props) {
		super(props);
		this.nodeRef = React.createRef();
		this.state = {
			connector: null
		};
	}

	drawConnector = e => {
		console.log(e);
		const { direction } = this.props;
		const connectorTarget = null; 	// temp - define and pass props.connectorTarget
	  this.setState({connector: () => (
	  	<svg style={{
        position: 'absolute',
        zIndex: 2,
        top: e.offsetTop,
        left: e.offsetLeft
      }}>
        <path
          strokeWidth="5"
          stroke="gray"
          fill="none"
          d={`
            M ${direction === 'right' ? `0 0` : `${e.offsetWidth} 0`}
            C ${direction === 'right' ? `50,10` : `50,10`}
              ${direction === 'right' ? `50,100` : `50,100`}
              ${direction === 'right' ? `100,100` : `-100,100`}
          `}
        />
      </svg>)
		});
	};

	componentDidMount() {
		this.props.drawConnector(this.nodeRef.current);
		this.drawConnector(this.nodeRef.current);
	}

	render() {
		const { direction, title, year, content } = this.props;
		return (
			<div className={`timeline-node-${direction}`}>
				{this.state.connector && this.state.connector()}
				{direction === 'right' && (
					<div className="timeline-marker" ref={this.nodeRef}>
					</div>
				)}
				<div className="timeline-content">
					<h2>{title}</h2>
					<p><em>{year}</em></p>
					<p>{content}</p>
				</div>
				{direction === 'left' && (
					<div className="timeline-marker" ref={this.nodeRef}>
					</div>
				)}
			</div>
		);
	}
}

export default TimelineNode;
