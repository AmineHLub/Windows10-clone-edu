import './App.css';
import { useState } from 'react';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';

function App() {
  const [taskState, settaskState] = useState(false);
  return (
    <main>
      <Desktop />
      <Taskbar taskState={taskState} settaskState={settaskState} />
    </main>
  );
}

export default App;
