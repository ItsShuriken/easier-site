import React from 'react';
import EasierAppBar from './components/EasierAppBar';
import Desktop from './components/Desktop';
import { WindowContextProvider } from './context/WindowContext';
import './App.css';

function App() {
  return (
    <WindowContextProvider>
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundColor: '#008080',
      }}>
        <EasierAppBar />
        <Desktop />
      </div>
    </WindowContextProvider>
  );
}

export default App;
