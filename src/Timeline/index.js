import React from 'react';
import { TimelineNode } from '../TimelineNode';

export const Timeline = () => (
  <div className="timeline">
    
    <div className="timeline-base"></div>

    <div className="timeline-nodes">

      <TimelineNode
        direction="left"
        title="Written Mongol"
        content="the standardized, unified written language in the Mongolian script"
      />

      <TimelineNode
        direction="right"
        title="Middle Mongol"
        content="the language of the imperial period captured in the Secret History"
      />

      <TimelineNode
        direction="left"
        title="Proto-Mongolic"
        content="the language reconstructed from the many modern Mongolic varieties"
      />

    </div>

  </div>
);
