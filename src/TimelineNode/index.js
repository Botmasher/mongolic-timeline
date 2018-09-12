import React from 'react';

export const TimelineNode = ({ direction, title, year, content, setRef }) => (
	<div className={`timeline-node-${direction}`}>
		{direction === 'right' && (
			<div className="timeline-marker">
			</div>
		)}
		<div className="timeline-content" ref={() => setRef(this)}>
			<h2>{title}</h2>
			<p><em>{year}</em></p>
			<p>{content}</p>
		</div>
		{direction === 'left' && (
			<div className="timeline-marker">
			</div>
		)}
	</div>
);
