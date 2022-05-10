/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../stylesheets/desktop.css';
import AppWindow from './Desktop/AppWindow';
import shortCuts from './Desktop/ShortCuts/ShortCuts';

export default function Desktop({
  settaskState, openedApps, setOpenedApps, appKiller,
}) {
  const [clickedApp, setClickedApp] = useState('');

  const applauncher = (app) => {
    setClickedApp('');
    const appObject = {
      name: app.name,
      icon: app.icon,
      id: Math.floor(Math.random() * 10) + 1,
    };
    setOpenedApps([...openedApps, appObject]);
  };

  const dekstopClicking = () => {
    settaskState(false);
    if (clickedApp !== '') {
      setClickedApp('');
    }
  };

  const oneClickOnApp = (app) => {
    setClickedApp(app);
  };

  return (
    <div
      className="desktop-wrapper d-flex"
      onClick={() => dekstopClicking()}
      aria-hidden="true"
    >
      {shortCuts.map((shortCut) => (
        <div
          className={clickedApp === shortCut.name ? 'shortcut-container selected-dsk-app' : 'shortcut-container'}
          aria-hidden="true"
          onClick={() => oneClickOnApp(shortCut.name)}
          onDoubleClick={() => applauncher(shortCut)}
          key={shortCut.index}
        >
          <img src={shortCut.icon} alt={shortCut.name} />
          <p>{shortCut.name}</p>
        </div>
      ))}
      <app>
        {
        openedApps.map((app) => (
          <AppWindow key={app.id} app={app} appKiller={appKiller} />
        ))
      }
      </app>
    </div>
  );
}
