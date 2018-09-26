import React from 'react';

const TimelineNode = ({ direction, title, year, content, offsetTop }) => {

	const makeTimelineMarker = useConnector => {
		if (useConnector) {
			return(
				<div style={styles.timelineNodeSide}>
					<div style={styles.timelineConnectorAbove}></div>
					<div style={styles.timelineConnectorBelow}></div>
				</div>
			);
		} else {
			return(
				<div style={styles.timelineNodeSide}>
				</div>
			);
		}
	};

	// NOTE remove -test from class name to apply defined App.css styles
	return(
		<div className={`timeline-node-${direction}-test`}
			style={styles.timelineNode}
		>
			{direction === 'right' ? <div style={styles.timelineNodeSymbol}></div> : ''}
			{direction === 'right' ? makeTimelineMarker(true) : makeTimelineMarker(false)}
			<div
				className="timeline-content-test"
				style={{
					...styles.timelineContent,
					borderLeft: direction === 'right' ? '2px solid black' : 0,
					borderRight: direction === 'left' ? '2px solid black' : 0
				}}
			>
				<h2>{title}</h2>
				<p><em>{year}</em></p>
				<p>{content}</p>
			</div>
			{direction === 'left' ? makeTimelineMarker(true) : makeTimelineMarker(false)}
		</div>
	);
}

const styles = {
	timelineNode: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row'
	},
	timelineContent: {
		flex: 3,
		padding: 10,
		backgroundColor: '#aaff00'
	},
	timelineNodeSide: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'green'
	},
	timelineConnectorAbove: {
		flex: 1,
		borderBottom: '2px solid black'
	},
	timelineConnectorBelow: {
		flex: 1
	}
};

export default TimelineNode;
