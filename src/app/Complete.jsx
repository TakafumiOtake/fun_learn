import React, { useState } from 'react';

function Complete({
  start, onBack,
}) {
  const [finish] = useState(new Date().getTime());

  return (
    <div className="content">
      <div className="header">
        <div className="back">
          <button type="button" className="button" onClick={onBack}>ホーム</button>
        </div>
      </div>
      <div className="congratulation">Congratulation!</div>
      <div className="time-record">
        タイムは
        {Math.floor((finish - start) / 1000)}
        秒でした
      </div>
    </div>
  );
}

export default Complete;
