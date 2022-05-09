/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../stylesheets/desktop.css';
import AppWindow from './Desktop/AppWindow';

export default function Desktop() {
  const openApps = [1];
  return (
    <div className="desktop-wrapper">
      {
        openApps.map((app) => (
          <AppWindow key={app} />
        ))
      }
    </div>
  );
}
