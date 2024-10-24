import React, { useRef } from 'react';
import Draggable from 'react-draggable';  // Import the Draggable component
import './Window.css';   // Import the styling

const Window = ({ title, children, onClose, isMinimized, onMinimize }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent">
      <div ref={nodeRef} className={`window ${isMinimized ? 'minimized' : ''}`}>
        <div className="window-header">
          <span>{title}</span>
          <div className="window-buttons">
            <button onClick={onMinimize}>
              {isMinimized ? '🔼' : '−'}
            </button>
            <button onClick={onClose}>✖</button>
          </div>
        </div>

        {!isMinimized && <div className="window-content">{children}</div>}
      </div>
    </Draggable>
  );
};

export default Window;
