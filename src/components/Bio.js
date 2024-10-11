import React from 'react';
import Window from './Window';   // Import the reusable Window component

const Bio = ({ onClose }) => {
  return (
    <Window title="About Us" onClose={onClose}>
      <div>
        <h3>About Easier</h3>
        <p>A group a guys based out of OKC that get together and make loud sounds sometimes and sing a little too...</p>
      </div>
    </Window>
  );
};

export default Bio;