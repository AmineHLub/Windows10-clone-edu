import React from 'react';

export default function Minesweeper() {
  return (
    <div className="frameapp-container">
      <iframe className="frame-sap" title="website" loading="lazy" src="https://minesweeper.one/">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
