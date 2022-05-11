/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../stylesheets/taskmenu.css';
import settings from '../../assets/taskbar/settings.png';
import power from '../../assets/taskbar/power.png';

export default function TaskMenu({ taskState, feedResponse }) {
  return (
    <div className={`fixed-task-menu ${taskState ? 'show-task' : 'close-task'}`}>
      <section className="taskbar-menu-setting">
        <img src={power} alt="power-btn" />
        <img src={settings} alt="settings" />
      </section>
      <section className="taskbar-menu-apps" />
      <section className="taskbar-menu-feeds">
        {feedResponse ? feedResponse.map((feed, index) => (
          <div key={index} className="feed-container">
            <p className="feed-header">{feed.title}</p>
            <img src={feed.urlToImage} alt="feed-img" />
          </div>
        )) : null}
      </section>
    </div>
  );
}
