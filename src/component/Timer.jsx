import React, { useEffect, useState } from 'react';

function getTime(start, end) {
  return `${Math.floor((end - start) / 1000)}秒`;
}

function Timer({ start }) {
  const [current, setCurrent] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setCurrent(new Date().getTime()), 200);
    return () => clearInterval(id);
  }, []);

  return (<div>{getTime(start, current)}</div>);
}

export default Timer;
