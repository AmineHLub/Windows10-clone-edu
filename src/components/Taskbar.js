/* eslint-disable react/prop-types */
import React from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';

export default function Taskbar({ feedResponse, taskState, settaskState }) {
  return (
    <>
      <TaskMenu taskState={taskState} feedResponse={feedResponse} />
      <section className="Taskbar">
        <div aria-hidden="true" className="start-menu-btn" onClick={() => settaskState(!taskState)} />
        <section className="fast-and-running" />
        <section className="time-settings">
          <TimeAndSettings />
        </section>
      </section>
    </>
  );
}
