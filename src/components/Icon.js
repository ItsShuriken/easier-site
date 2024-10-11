import React from 'react';
import './Icon.css';  // Import the CSS for the icon

const Icon = ({ label, onOpen, iconFile }) => {
  return (
    <div className="desktop-icon" onDoubleClick={onOpen}>
      {/* You can replace the image source with a relevant icon file */}
      <img src={iconFile} alt={label} className="icon-image" />
      <p>{label}</p>
    </div>
  );
};

export default Icon;