import { createContext, useContext, useState } from 'react';

const WindowContext = createContext();

export function WindowContextProvider({ children }) {
  const [windows, setWindows] = useState([]);

  const openWindow = (appName) => {
    setWindows((prev) => [
      ...prev.filter(w => w.appName !== appName),
      { appName, zIndex: Date.now() }
    ]);
  };

  const closeWindow = (appName) => {
    setWindows((prev) => prev.filter(w => w.appName !== appName));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}

export const useWindow = () => useContext(WindowContext);
