/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../stylesheets/desktop.css';
import AppWindow from './Desktop/AppWindow';
import Aboutme from './Desktop/Apps/Aboutme';
import shortCuts from './Desktop/ShortCuts/ShortCuts';

export default function Desktop({
  settaskState, openedApps, appKiller, clickedApp, setClickedApp, applauncher,
}) {
  const [desktopLeftClick, setDesktopLeftClick] = useState({
    state: false,
    position: {},
  });

  const [aboutMePopup, setAboutMePopup] = useState(false);

  const dekstopClicking = () => {
    settaskState(false);
    if (clickedApp !== '') {
      setClickedApp('');
    }
    setDesktopLeftClick({ state: false, position: {} });
  };

  const desktopLeftClickFn = (e) => {
    e.preventDefault();
    document.querySelector('.taskbar-wrapper').addEventListener('click', () => setDesktopLeftClick({ state: false, position: {} }));
    setDesktopLeftClick((prevState) => ({
      state: true,
      position: {
        top: e.clientY,
        left: e.clientX,
      },
    }
    ));
  };

  const oneClickOnApp = (app) => {
    setClickedApp(app);
  };

  return (
    <div
      className="desktop-wrapper d-flex"
      onClick={() => dekstopClicking()}
      onContextMenu={(e) => { desktopLeftClickFn(e); }}
      aria-hidden="true"
    >
      {desktopLeftClick.state ? (
        <div className="desktop-leftclick-popup custom-context-task d-flex" style={desktopLeftClick.position}>
          <div onClick={() => alert('nothing to personalize yet')} aria-hidden className="desktop-leftclick-popup-content d-flex personalize">
            <img src="https://i.ibb.co/hKKGgz4/personalize.png" alt="" />
            <p>Personalize</p>
          </div>
          <div aria-hidden onClick={() => setAboutMePopup(true)} className="desktop-leftclick-popup-content d-flex personalize">
            <img src="https://i.ibb.co/wNK4Q3c/aboutme-ico.png" alt="" />
            <p>About me</p>
          </div>
        </div>
      )
        : null}
      {aboutMePopup ? <Aboutme setAboutMePopup={setAboutMePopup} /> : null}
      {shortCuts.filter((shortcut) => shortcut.desktop).map((shortCut) => (
        <div
          className={clickedApp === shortCut.name ? 'shortcut-container selected-dsk-app' : 'shortcut-container'}
          aria-hidden="true"
          onClick={() => oneClickOnApp(shortCut.name)}
          onContextMenu={(e) => { e.stopPropagation(); e.preventDefault(); }}
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
          <AppWindow
            key={app.id}
            app={app}
            appKiller={appKiller}
            openedApps={openedApps}
          />
        ))
      }
      </app>
    </div>
  );
}
