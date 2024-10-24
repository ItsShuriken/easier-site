import React, { useState } from 'react';
import Taskbar from './components/Taskbar';
import Icon from './components/Icon';
import Bio from './components/Bio';
import Socials from './components/Socials';
import Window from './components/Window';
import BioIcon from './images/chm-1.png';
import SocialsIcon from './images/globe_map-0.png';
import './App.css';

function App() {
  const [windows, setWindows] = useState({
    bio: {isOpen: false, isMinimized: false },
    socials: {isOpen: false, isMinimized: false },
  });

  const toggleWindow = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: {...prevWindows[windowName], isOpen: !prevWindows[windowName].isOpen },
    }));
  };

  const toggleMinimize = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: { ...prevWindows[windowName], isMinimized: !prevWindows[windowName].isMinimized },
    }));
  };

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      <Icon label="About Us" iconImage={BioIcon} onOpen={() => toggleWindow('bio')} />
      <Icon label="Socials" iconImage={SocialsIcon} onOpen={() => toggleWindow('socials')} />

      {/* BIO // ABOUT US */}
      {windows.bio.isOpen && (
        <Window 
          title="About Easier"
          onClose={() => toggleWindow('bio')} 
          isMinimized={windows.bio.isMinimized}
          onMinimize={() => toggleMinimize('bio')}
        >
          <Bio />
        </Window>
      )}

      {/* BIO // ABOUT US */}
      {windows.socials.isOpen && (
        <Window 
          title="Some social media links"
          onClose={() => toggleWindow('socials')} 
          isMinimized={windows.socials.isMinimized}
          onMinimize={() => toggleMinimize('socials')}
        >
          <Socials />
        </Window>
      )}

      {/*  TASKBAR */}
      <Taskbar 
        windows={windows}
        toggleWindow={toggleWindow} 
        toggleMinimize={toggleMinimize}
      />
    </div>
  );
}

export default App;