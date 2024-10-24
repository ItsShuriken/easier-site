import React, { useState, useEffect } from 'react';
import './Taskbar.css'; // Create a separate CSS for styling

const Taskbar = () => {
  const [time, setTime] = useState('');

  // Function to update the time at the beginning of each minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;  // Convert to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      setTime(`${hours}:${minutes} ${ampm}`);
    };

    // Call the function once initially to display the current time immediately
    updateTime();

    // Calculate the time until the next full minute (for precise update)
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000;

    // Set a timeout to update the clock at the start of the next minute
    const minuteTimeout = setTimeout(() => {
      // After the timeout, update the time and then set an interval to update every minute
      updateTime();
      const interval = setInterval(updateTime, 60 * 1000); // Update every minute

      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, msUntilNextMinute);

    // Cleanup the timeout on unmount
    return () => clearTimeout(minuteTimeout);
  }, []);


  return (
    <div className="taskbar">
      <div className="start-button">Start</div>
      <div className="taskbar-icons">
        {/* Dummy icons */}
        <div className="icon">🗂</div>
        <div className="icon">🖥</div>
      </div>
      <div className="clock">{time}</div>
    </div>
  );
};

export default Taskbar;