// WindowContext.js
import { createContext, useContext, useState } from 'react';

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [openWindows, setOpenWindows] = useState([]); 
  const [zIndexMap, setZIndexMap] = useState({});
  const [zCounter, setZCounter] = useState(1);

  const openWindow = (id, title) => {
    setOpenWindows((prev) => {
      if (prev.find((w) => w.id === id)) return prev;
      return [...prev, { id, title }];
    });
    bringToFront(id);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id) => {
    setZIndexMap((prev) => ({ ...prev, [id]: zCounter + 1 }));
    setZCounter((z) => z + 1);
  };

  return (
    <WindowContext.Provider value={{ openWindows, openWindow, closeWindow, bringToFront, zIndexMap }}>
      {children}  
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);