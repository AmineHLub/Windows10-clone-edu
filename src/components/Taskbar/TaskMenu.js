/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../stylesheets/taskmenu.css';
import settings from '../../assets/taskbar/settings.png';
import power from '../../assets/taskbar/power.png';
import shortCuts from '../Desktop/ShortCuts/ShortCuts';

export default function TaskMenu({
  taskState, settaskState, feedResponse, openTaskApp, applauncher,
}) {
  return (
    <div
      className={`fixed-task-menu ${taskState ? 'show-task' : 'close-task'}`}
      onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }}
    >
      <section className="taskbar-menu-setting">
        <img src={power} alt="power-btn" />
        <img src={settings} aria-hidden="true" onClick={() => { openTaskApp('Settings'); settaskState(!taskState); }} alt="settings" />
      </section>
      <section className="taskbar-menu-apps">
        {shortCuts.map((app) => (
          <div aria-hidden="true" onClick={() => applauncher(app)} className="taskbar-menu-app" key={app.index}>
            <img src={app.icon} alt={app.name} />
            <p>{app.name}</p>
          </div>
        ))}
      </section>
      <section className="taskbar-menu-feeds">
        {feedResponse ? feedResponse.map((feed, index) => (
          <div key={index} className="feed-container">
            <p className="feed-header">{feed.title.substring(0, 50)}</p>
            <img src={feed.image} alt="feed-img" />
          </div>
        )) : null}
      </section>
    </div>
  );
}
