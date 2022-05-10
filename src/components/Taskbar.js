/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';

export default function Taskbar({
  feedResponse, taskState, settaskState, openedApps, appKiller,
}) {
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
  });

  return (
    <>
      <TaskMenu taskState={taskState} feedResponse={feedResponse} />
      <section className="Taskbar">
        <div aria-hidden="true" className="start-menu-btn" onClick={() => settaskState(!taskState)} />
        <section className="fast-and-running d-flex">
          {openedApps.map((app) => (
            <div onContextMenu={(e) => handleTaskbarAppsLeftClick(e, app)} id={app.id} className="fast-and-running-app" key={app.id}>
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
    </>
  );
}
