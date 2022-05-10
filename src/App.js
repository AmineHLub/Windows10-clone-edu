import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';

function App() {
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

  const [taskState, settaskState] = useState(false);
  const [openedApps, setOpenedApps] = useState([]);

  const appKiller = (app) => {
    const newOpenedApps = openedApps.filter((openedApp) => openedApp.id !== app.id);
    setOpenedApps(newOpenedApps);
  };

  return (
    <main>
      <Desktop
        settaskState={settaskState}
        openedApps={openedApps}
        setOpenedApps={setOpenedApps}
        appKiller={appKiller}
      />
      <Taskbar
        feedResponse={feedResponse}
        taskState={taskState}
        settaskState={settaskState}
      />
    </main>
  );
}

export default App;
