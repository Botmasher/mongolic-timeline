import React from 'react';

export const TimelineNode = ({ direction, title, content }) => (
	<div className={`timeline-node-${direction}`}>
		<div className="timeline-marker"></div>
		<div className="timeline-content">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	</div>
);
