import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import appReorganizer from './components/Tools/appReorganizer';

function App() {
  const [feedResponse, setFeedResponse] = useState();
  useEffect(async () => {
    const dateState = new Date();
    const dateObj = dateState.toLocaleDateString('fr-FR').split('/');
    console.log(dateObj);
    const baseUrl = 'https://gnews.io/api/v4/top-headlines?token=deff64bc4b4332b74c1f07b43deffce6&lang=en';
    const feedData = await axios.get(baseUrl);
    setFeedResponse(feedData.data.articles.slice(0, 6));
  }, []);
  console.log(feedResponse);

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
