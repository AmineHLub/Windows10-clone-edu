/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../../../stylesheets/Apps/taskmgr.css';

export default function Taskmgr({ appKiller, openedApps }) {
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <div
      className="taskmgr-container"
      aria-hidden="true"
      onClick={() => {
        if (selectedTask) {
          setSelectedTask(null);
        }
      }}
    >
      {openedApps.filter((app) => app.name !== 'Manager').map((app) => (
        <div
          aria-hidden="true"
          onClick={() => {
            setTimeout(() => {
              setSelectedTask(app);
            }, 20);
          }}
          className={selectedTask === app
            ? 'taskmgr-app-container selected-task d-flex' : 'taskmgr-app-container d-flex'}
          key={app.id}
        >
          <img src={app.icon} alt={app.name} />
          <p>{app.name}</p>
        </div>
      ))}
      <section className="task-killer-section d-flex">
        <button type="button" className="task-mgr-nodetails">More Details</button>
        <button type="button" className={selectedTask ? 'task-mgr-end can-end' : 'task-mgr-end'} onClick={() => appKiller(selectedTask)}>End Task</button>
      </section>
    </div>
  );
}
