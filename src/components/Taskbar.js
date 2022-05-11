/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';
import appReorganizer from './Tools/appReorganizer';

export default function Taskbar({
  feedResponse, taskState, settaskState, openedApps, appKiller,
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

  return (
    <div
      className="taskbar-wrapper"
      onContextMenu={(e) => handleTaskbarLeftClick(e)}
    >
      <TaskMenu taskState={taskState} feedResponse={feedResponse} />
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
        </section>
      </section>
      {taskbarleftclickPos && !rightClickPopup ? (
        <div className="custom-context-task d-flex taskbar-leftclick" style={taskbarleftclickPos}>
          <button onClick={() => console.log('taskmgr')} type="button">TaskMgr</button>
          <button onClick={() => console.log('settings')} type="button">Settings</button>
        </div>
      ) : null}
    </div>
  );
}
