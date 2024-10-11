import React, { useState } from 'react';
import './Window.css';   // Import the styling

const Window = ({ title, children, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`window ${isMinimized ? 'minimized' : ''}`}>
      <div className="window-header">
        <span>{title}</span>
        <div className="window-buttons">
          {/* Change the minimize button text to '-' for Windows 98 style */}
          <button onClick={() => setIsMinimized(!isMinimized)}>
            {isMinimized ? '🔼' : '−'}
          </button>
          <button onClick={onClose}>✖</button>
        </div>
      </div>
      
      {/* Content inside the window */}
      {!isMinimized && <div className="window-content">{children}</div>}
    </div>
  );
};

export default Window;
