import React, { useState, useEffect } from 'react';
import connected from '../../assets/connected.png';
import sound from '../../assets/sound.png';

export default function TimeAndSettings() {
  const [dateState, setDateState] = useState(new Date());
  const dateObj = {
    time: dateState.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
    date: dateState.toLocaleDateString('en-US'),
  };
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <>
      <img src={connected} alt="connected" />
      <img src={sound} alt="sound" />
      <div className="time-date-container">
        <p>{dateObj.time}</p>
        <p>{dateObj.date}</p>
      </div>
    </>
  );
}
