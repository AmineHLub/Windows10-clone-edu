/* eslint-disable react/prop-types */
import React from 'react';

export default function TaskMenu({ taskState }) {
  return (
    <div className={`fixed-task-menu ${taskState ? 'show-task' : 'close-task'}`}>
      <div />
    </div>
  );
}
