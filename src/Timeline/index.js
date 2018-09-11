import React from 'react';
import { TimelineNode } from '../TimelineNode';

export const Timeline = ({ entries }) => (
  <div className="timeline">
    <div className="timeline-nodes">
      {entries.map((entry, i) => (
        <TimelineNode
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
