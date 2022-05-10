/* eslint-disable react/prop-types */
import React from 'react';
import closeapp from '../../assets/window/closeapp.png';
import max from '../../assets/window/max.png';
import slide from '../../assets/window/slide.png';

export default function WindowControle({ app, appKiller }) {
  return (
    <div className="window-container-upper-control d-flex">
      <div className="window-container-upper-control-left">
        <h2>{app.name}</h2>
      </div>
      <div className="window-container-upper-control-right">
        <img src={slide} alt="slide" />
        <img src={max} alt="max" />
        <img src={closeapp} alt="closeapp" aria-hidden="true" onClick={() => appKiller(app)} />
      </div>
    </div>
  );
}
