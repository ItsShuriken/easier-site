import React from 'react';
import EasierAppBar from './components/EasierAppBar';
import Desktop from './components/Desktop';
import { WindowProvider, useWindowContext } from './context/WindowContext';
import './App.css';

function Windows() {
  const { openWindows } = useWindowContext();

  return (
    <>
      {openWindows.map((win) => {
        const Component = windowContentMap[win.id];
        return (
          <WindowWrapper key={win.id} id={win.id} title={win.title}>
            {Component ? <Component /> : <div>Unknown Window</div>}
          </WindowWrapper>
        );
      })}
    </>
  );
}

function App() {
  return (
    <WindowProvider>
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundColor: '#008080',
      }}>
        <EasierAppBar />
        <Desktop />
        <Windows />
      </div>
    </WindowProvider>
  );
}

export default App;
