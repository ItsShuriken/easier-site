import React from 'react';
import './Taskbar.css'; // Create a separate CSS for styling

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="start-button">Start</div>
      <div className="taskbar-icons">
        {/* Dummy icons */}
        <div className="icon">🗂</div>
        <div className="icon">🖥</div>
      </div>
      <div className="clock">12:34 PM</div>
    </div>
  );
};

export default Taskbar;