import React from 'react';
import '../stylesheets/taskbar.css';
import TimeAndSettings from './Taskbar/TimeAndSettings';

export default function Taskbar() {
  console.log('hery');
  return (
    <section className="Taskbar">
      <div type="button" className="start-menu-btn" />
      <section className="fast-and-running" />
      <section className="time-settings">
        <TimeAndSettings />
      </section>
    </section>
  );
}
