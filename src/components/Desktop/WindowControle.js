/* eslint-disable react/prop-types */
import React from 'react';
import appMinimizer from '../Tools/appMinimizer';
import closeapp from '../../assets/window/closeapp.png';
import max from '../../assets/window/max.png';
import slide from '../../assets/window/slide.png';

export default function WindowControle({
  app, appKiller, windowState, setWindowState,
}) {
  return (
    <div className="window-container-upper-control d-flex">
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
