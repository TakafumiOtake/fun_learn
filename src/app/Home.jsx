import React from 'react';

function Home({ onModeChange }) {
  return (
    <div className="mode-list">
      <button type="button" className="mode-button button" onClick={() => onModeChange('add')}>たしざん</button>
      <button type="button" className="mode-button button" onClick={() => onModeChange('katakana')}>かたかな</button>
    </div>
  );
}

export default Home;
