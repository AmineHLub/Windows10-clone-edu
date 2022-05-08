import React from 'react';
import '../../stylesheets/applayout.css';
import WindowControle from './WindowControle';
import Edge from './Apps/Edge';

export default function AppWindow() {
  return (
    <div className="window-container-frame">
      <WindowControle />
      <div className="application-container">
        <Edge />
      </div>
    </div>
  );
}
