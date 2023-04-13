import React, { useState, useCallback } from 'react';
import Home from './Home';
import Add from './Add';
import './App.css';
import Katakana from './Katakana';

function App() {
  const [mode, setMode] = useState('home');
  const toHome = useCallback(() => {
    setMode('home');
  }, []);

  switch (mode) {
    case 'home':
      return <Home onModeChange={setMode} />;
    case 'add':
      return <Add onBack={toHome} />;
    case 'katakana':
      return <Katakana onBack={toHome} questionsCount={10} />;
    default:
      return <div>Error!</div>;
  }
}

export default App;
