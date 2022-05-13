import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import appReorganizer from './components/Tools/appReorganizer';

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
  const [clickedApp, setClickedApp] = useState('');

  const appKiller = (app) => {
    const newOpenedApps = openedApps.filter((openedApp) => openedApp.id !== app.id);
    setOpenedApps(newOpenedApps);
  };

  const applauncher = (app) => {
    setClickedApp('');
    settaskState(false);
    const appObject = {
      name: app.name,
      icon: app.icon,
      id: Math.floor(Math.random() * 10) + 1,
    };
    setOpenedApps([...openedApps, appObject]);
    setTimeout(() => appReorganizer(appObject), 20);
  };

  return (
    <main>
      <Desktop
        settaskState={settaskState}
        openedApps={openedApps}
        appKiller={appKiller}
        applauncher={applauncher}
        clickedApp={clickedApp}
        setClickedApp={setClickedApp}
      />
      <Taskbar
        feedResponse={feedResponse}
        taskState={taskState}
        settaskState={settaskState}
        openedApps={openedApps}
        setOpenedApps={setOpenedApps}
        appKiller={appKiller}
        applauncher={applauncher}
      />
    </main>
  );
}

export default App;
