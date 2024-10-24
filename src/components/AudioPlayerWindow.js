import React from 'react';
import './Window.css'; // Reuse the window styling
import AudioPlayer from './AudioPlayer';  // Import the AudioPlayer component

const AudioPlayerWindow = () => {
  return (
    <div>
        {!isMinimized && (
            <div className="window-content">
            <AudioPlayer src={file.src} title={file.title} />
            </div>
        )}
    </div>
  );
};

export default AudioPlayerWindow;
