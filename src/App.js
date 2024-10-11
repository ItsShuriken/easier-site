import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import Icon from './components/Icon';
import Bio from './components/Bio';        // Import Bio component
import BioIcon from './images/chm-1.png';
import './App.css';

function App() {
  const [windows, setWindows] = useState({
    bio: false,
  });

  const toggleWindow = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      <Icon label="About Us" iconFile={BioIcon} onOpen={() => toggleWindow('bio')} />

      {/* Conditionally render the individual page components */}
      {windows.bio && <Bio onClose={() => toggleWindow('bio')} />}

      <Taskbar toggleWindow={toggleWindow} />
    </div>
  );
}

export default App;