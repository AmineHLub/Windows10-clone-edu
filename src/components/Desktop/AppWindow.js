/* eslint-disable no-unused-vars */
import React from 'react';
import '../../stylesheets/applayout.css';
import WindowControle from './WindowControle';
import Edge from './Apps/Edge';
import Paint from './Apps/Paint';
import Spotify from './Apps/Spotify';
import NotePad from './Apps/NotePad';

export default function AppWindow() {
  return (
    <div className="window-container-frame">
      <WindowControle />
      <div className="application-container">
        <NotePad />
      </div>
    </div>
  );
}
