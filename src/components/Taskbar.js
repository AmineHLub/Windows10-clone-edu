import React, { useState } from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';

export default function Taskbar() {
  const [taskState, settaskState] = useState(false);
  return (
    <section className="Taskbar">
      <TaskMenu taskState={taskState} />
      <div aria-hidden="true" className="start-menu-btn" onClick={() => settaskState(!taskState)} />
      <section className="fast-and-running" />
      <section className="time-settings">
        <TimeAndSettings />
      </section>
    </section>
  );
}
