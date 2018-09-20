import React from 'react';
import ReactDOM from 'react-dom';

class TimelineNode extends React.Component {
	constructor(props) {
		super(props);
		this.connectorRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.connectorRef.current);
		const origX = 0;
		const origY = this.props.offsetTop;
		const insertX = this.props.direction === 'right' ? this.connectorRef.current.clientWidth : 0;
		const insertY = this.props.offsetTop + (this.connectorRef.current.clientHeight * 0.5);
		this.props.storeSVGPoints(origX, origY, insertX, insertY);
	}

	render() {
		const { direction, title, year, content, offsetTop } = this.props;
		// NOTE remove -test from class name to apply defined App.css styles
		return (
			<div className={`timeline-node-${direction}-test`}
				style={{
					...styles.timelineNode,
					top: offsetTop,
					left: direction === 'right' ? '50%' : 0
				}}
			>
				<div
					className="timeline-marker-test"
					style={{...styles.timelineMarker, width: direction === 'left' ? '10%' : '20%'}}>
				</div>
				<div
					className="timeline-content-test"
					style={styles.timelineContent}
					ref={this.connectorRef}
				>
					<h2>{title}</h2>
					<p><em>{year}</em></p>
					<p>{content}</p>
				</div>
				<div
					className="timeline-marker-test"
					style={{...styles.timelineMarker, width: direction === 'right' ? '10%' : '20%'}}>
				</div>
			</div>
		);
	}
}

const styles = {
	timelineNode: {
		position: 'relative',
		display: 'flex',
		zIndex: 5,
		width: '50%',
		backgroundColor: '#aaff00',
		opacity: 0.2,
	},
	timelineContent: {
		width: '70%',
		padding: 10
	},
	timelineMarker: {
		backgroundColor: 'red',
		opacity: 0.2
	}
};

export default TimelineNode;
