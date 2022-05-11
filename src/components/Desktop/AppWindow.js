/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../stylesheets/applayout.css';
import WindowControle from './WindowControle';
import Edge from './Apps/Edge';
import Paint from './Apps/Paint';
import Spotify from './Apps/Spotify';
import NotePad from './Apps/NotePad';
import appReorganizer from '../Tools/appReorganizer';

export default function AppWindow({ app, appKiller }) {
  const [windowState, setWindowState] = useState(false);
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
    <div
      id={app.id}
      aria-hidden="true"
      onClick={() => appReorganizer(app)}
      className={windowState ? 'window-container-frame maxsized-app' : 'window-container-frame'}
    >
      <WindowControle
        app={app}
        appKiller={appKiller}
        windowState={windowState}
        setWindowState={setWindowState}
      />
      <div className="application-container">
        {appSelector(app)}
      </div>
    </div>
  );
}
