import React from 'react';
import '../../../stylesheets/Apps/frameapp.css';

export default function Paint() {
  return (
    <div className="frameapp-container">
      <iframe
        className="frame-sap"
        title="website"
        loading="lazy"
        src="https://open.spotify.com/embed/playlist/5iYE2wOlzD6c8Zpg1yGco3
"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
