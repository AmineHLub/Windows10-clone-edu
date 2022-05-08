/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../stylesheets/taskbar.css';
import axios from 'axios';
import TimeAndSettings from './Taskbar/TimeAndSettings';
import TaskMenu from './Taskbar/TaskMenu';

export default function Taskbar({ taskState, settaskState }) {
  const [feedResponse, setFeedResponse] = useState();
  useEffect(async () => {
    const baseUrl = 'https://newsapi.org/v2/everything?'
    + 'q=Microsoft&'
    + 'from=2022-04-18&'
    + 'sortBy=popularity&'
    + 'apiKey=437d3b8f9c484293997c0c9027a39e23';
    const feedData = await axios.get(baseUrl);
    setFeedResponse(feedData.data.articles.slice(0, 6));
  }, []);
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
