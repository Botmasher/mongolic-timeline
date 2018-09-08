import React from 'react';

export const Timeline = () => (
  <div className="timeline">
    
    <div className="timeline-base"></div>

    <div className="timeline-node">
      <div className="timeline-marker"></div>
      <div className="timeline-content-right">
        <h2>Written Mongol</h2>
        <p>the standardized, official written language in the Mongolian script</p>
      </div>
    </div>

    <div className="timeline-node">
      <div className="timeline-marker"></div>
      <div className="timeline-content-left">
        <h2>Middle Mongol</h2>
        <p>the language of the imperial period captured in the Secret History</p>
      </div>
    </div>

    <div className="timeline-node">
      <div className="timeline-marker"></div>
      <div className="timeline-content-right">
        <h2>Proto-Mongolic</h2>
        <p>the language reconstructed from the many modern Mongolic varieties</p>
      </div>
    </div>

  </div>
);
