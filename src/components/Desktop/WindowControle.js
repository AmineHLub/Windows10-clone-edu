/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import appMinimizer from '../Tools/appMinimizer';
import closeapp from '../../assets/window/closeapp.png';
import max from '../../assets/window/max.png';
import slide from '../../assets/window/slide.png';

export default function WindowControle({
  app, appKiller, windowState, setWindowState, setPosition,
}) {
  const [draggableDiv, setDraggableDiv] = useState(false);
  const [movementDiff, setMovementDiff] = useState(null);

  const startDragging = (e) => {
    setDraggableDiv(true);
    const previousPos = {
      x: e.clientX - e.currentTarget.getBoundingClientRect().left + 130,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top,
    };
    setMovementDiff(previousPos);
  };

  const stopDragging = () => {
    setDraggableDiv(false);
  };

  const dragging = (e) => {
    if (draggableDiv) {
      const top = e.clientY - movementDiff.y;
      const left = e.clientX - movementDiff.x;
      const NewDivPosition = {
        top: `${top}px`,
        left: `${left}px`,
      };
      if (top <= 0) {
        setWindowState(true);
        stopDragging();
      } else {
        setWindowState(false);
      }
      setPosition(NewDivPosition);
    }
  };

  return (
    <div className="window-container-upper-control d-flex">
      <div className="window-container-upper-control-left d-flex">
        <img src={app.icon} alt={app.name} />
        <p>{app.name === 'Command' ? 'C:\\Windows\\system32\\cmd.exe' : app.name}</p>
      </div>
      <div
        className="window-container-upper-control-middle"
        aria-hidden="true"
        onMouseDown={(e) => startDragging(e)}
        onMouseMove={(e) => dragging(e)}
        onMouseUp={() => stopDragging()}
        onDoubleClick={() => setWindowState(!windowState)}
      />
      <div className="window-container-upper-control-right">
        <img src={slide} alt="slide" aria-hidden="true" onClick={() => appMinimizer(app)} />
        <img src={max} aria-hidden="true" onClick={() => setWindowState(!windowState)} alt="max" />
        <img src={closeapp} alt="closeapp" aria-hidden="true" onClick={() => appKiller(app)} />
      </div>
    </div>
  );
}
