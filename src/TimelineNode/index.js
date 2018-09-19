import React from 'react';

const TimelineNode = ({ direction, title, year, content, offsetTop }) => {
	const drawConnector = () => (
		// example SVG viewbox settings for resizing
		// <svg
		// 	viewBox="0 0 500 150"
		// 	preserveAspectRatio={direction === 'right' ? "xMinYMin meet" : "xMaxYMin meet"}
		//	x="50"
		//	y="0"
		// >
		<div
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
			}}
		>
	  	<svg
				style={{
        	zIndex: 4,
        	top: 0,
        	left: 0
      	}}
			>
        <path
          strokeWidth="2"
          stroke="gray"
          fill="none"
          d={`
            M ${direction === 'right' ? `0 0` : `0 0`}
            C ${direction === 'right' ? `50,10` : `450,10`}
              ${direction === 'right' ? `50,50` : `450,50`}
              ${direction === 'right' ? `100,50` : `400,50`}
          `}
        />
      </svg>
		</div>
	);

	// NOTE remove -test from class name to apply defined App.css styles
	return (
		<div className={`timeline-node-${direction}-test`}
			style={{
				...styles.timelineNode,
				top: offsetTop,
				left: direction === 'right' ? '51%' : 0
			}}
		>
			{drawConnector()}
			{direction === 'right' && (
				<div className="timeline-marker-test" style={styles.timelineMarker}>
				</div>
			)}
			<div className="timeline-content-test" style={styles.timelineContent}>
				<h2>{title}</h2>
				<p><em>{year}</em></p>
				<p>{content}</p>
			</div>
			{direction === 'left' && (
				<div className="timeline-marker-test" style={styles.timelineMarker}>
				</div>
			)}
		</div>
	);
}

const styles = {
	timelineNode: {
		position: 'relative',
		display: 'flex',
		zIndex: 5,
		width: '50%',
		backgroundColor: '#aaff00'
	},
	timelineContent: {
		width: '80%',
		padding: 10
	},
	timelineMarker: {
		width: '20%',
		backgroundColor: 'red'
	}
};

export default TimelineNode;
