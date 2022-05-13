import React from 'react';
import '../../../stylesheets/Apps/frameapp.css';

export default function Paint() {
  return (
    <div className="frameapp-container">
      <iframe className="frame-sap" title="website" loading="lazy" src="https://jspaint.app/">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
