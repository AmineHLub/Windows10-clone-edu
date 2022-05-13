/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';
import appReorganizer from './Tools/appReorganizer';
import goToDekstop from './Tools/ goToDekstop';

export default function Taskbar({
  feedResponse, taskState, settaskState, openedApps, appKiller, setOpenedApps,
  applauncher,
}) {
  const [taskbarleftclickPos, setTaskbarleftclickPos] = useState(null);
  const [rightClickPopup, setrightClickPopup] = useState(false);
  const [idForRightClickPopup, setidForRightClickPopup] = useState(null);

  const handleTaskbarAppsLeftClick = (e, app) => {
    e.preventDefault();
    setidForRightClickPopup(app.id);
    setrightClickPopup(true);
  };

  document.body.addEventListener('click', () => {
    setrightClickPopup(false);
    setidForRightClickPopup(null);
    setTaskbarleftclickPos(null);
  });

  const handleTaskbarLeftClick = (e) => {
    e.preventDefault();
    setTaskbarleftclickPos({ left: e.clientX });
  };

  const openTaskApp = (app) => {
    let appObject;
    if (app === 'taskmgr') {
      appObject = {
        name: 'Manager',
        icon: 'https://i.ibb.co/KWTjFLb/taskmgr.png',
        id: Math.floor(Math.random() * 10) + 1,
      };
    } else {
      appObject = {
        name: 'Settings',
        icon: 'https://i.ibb.co/HY7dHKq/settings-ico.png',
        id: Math.floor(Math.random() * 10) + 1,
      };
    }
    setOpenedApps([...openedApps, appObject]);
    setTimeout(() => appReorganizer(appObject), 20);
  };

  return (
    <div
      className="taskbar-wrapper"
      onContextMenu={(e) => handleTaskbarLeftClick(e)}
    >
      <TaskMenu
        applauncher={applauncher}
        taskState={taskState}
        settaskState={settaskState}
        feedResponse={feedResponse}
        openTaskApp={openTaskApp}
        openedApps={openedApps}
      />
      <section className="Taskbar">
        <div aria-hidden="true" className="start-menu-btn" onClick={() => settaskState(!taskState)} />
        <section className="fast-and-running d-flex">
          {openedApps.map((app) => (
            <div
              onContextMenu={(e) => handleTaskbarAppsLeftClick(e, app)}
              id={app.id}
              aria-hidden="true"
              className="fast-and-running-app"
              key={app.id}
              onClick={() => appReorganizer(app)}
            >
              {rightClickPopup && idForRightClickPopup === app.id ? (
                <div className="custom-context-task d-flex">
                  <button onClick={() => appKiller(app)} type="button">close</button>
                </div>
              ) : null}

              <img src={app.icon} alt={app.name} />
            </div>
          ))}
        </section>
        <section className="time-settings">
          <TimeAndSettings />
          <div className="go-todesktop" aria-hidden onClick={() => goToDekstop()} />
        </section>
      </section>
      {taskbarleftclickPos && !rightClickPopup ? (
        <div className="custom-context-task d-flex taskbar-leftclick" style={taskbarleftclickPos}>
          <button onClick={() => openTaskApp('taskmgr')} type="button">TaskMgr</button>
          <button onClick={() => openTaskApp('settings')} type="button">Settings</button>
        </div>
      ) : null}
    </div>
  );
}
