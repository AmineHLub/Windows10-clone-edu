/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../../stylesheets/applayout.css';
import WindowControle from './WindowControle';
import Edge from './Apps/Edge';
import Paint from './Apps/Paint';
import Spotify from './Apps/Spotify';
import NotePad from './Apps/NotePad';

export default function AppWindow({ app }) {
  const appSelector = (app) => {
    switch (app.name) {
      case 'Edge': return <Edge />;
      case 'Paint': return <Paint />;
      case 'Notepad': return <NotePad />;
      case 'Spotify': return <Spotify />;
      default: <Paint />;
    }
    return (<></>);
  };

  return (
    <div id={app.id} className="window-container-frame">
      <WindowControle app={app} />
      <div className="application-container">
        {appSelector(app)}
      </div>
    </div>
  );
}
