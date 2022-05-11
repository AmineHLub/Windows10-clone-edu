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
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top,
    };
    setMovementDiff(previousPos);
  };

  const dragging = (e) => {
    if (draggableDiv) {
      const top = e.clientY - movementDiff.y;
      const left = e.clientX - movementDiff.x;
      const NewDivPosition = {
        top: `${top}px`,
        left: `${left}px`,
      };
      setPosition(NewDivPosition);
    }
  };

  const stopDragging = () => {
    setDraggableDiv(false);
  };
  return (
    <div
      aria-hidden="true"
      onMouseDown={(e) => startDragging(e)}
      onMouseMove={(e) => dragging(e)}
      onMouseUp={() => stopDragging()}
      onDoubleClick={() => setWindowState(!windowState)}
      className="window-container-upper-control d-flex"
    >
      <div className="window-container-upper-control-left">
        <h2>{app.name}</h2>
      </div>
      <div className="window-container-upper-control-right">
        <img src={slide} alt="slide" aria-hidden="true" onClick={() => appMinimizer(app)} />
        <img src={max} aria-hidden="true" onClick={() => setWindowState(!windowState)} alt="max" />
        <img src={closeapp} alt="closeapp" aria-hidden="true" onClick={() => appKiller(app)} />
      </div>
    </div>
  );
}
