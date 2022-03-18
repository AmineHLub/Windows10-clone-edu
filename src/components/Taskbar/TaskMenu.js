/* eslint-disable react/prop-types */
import React from 'react';

export default function TaskMenu({ taskState, feedResponse }) {
  return (
    <div className={`fixed-task-menu ${taskState ? 'show-task' : 'close-task'}`}>
      <section className="taskbar-menu-setting" />
      <section className="taskbar-menu-apps" />
      <section className="taskbar-menu-feeds">
        {feedResponse ? feedResponse.map((feed) => (
          <div key={1} className="feed-container">
            <p className="feed-header">{feed.title}</p>
            <img src={feed.urlToImage} alt="feed-img" />
          </div>
        )) : null}
      </section>
    </div>
  );
}
