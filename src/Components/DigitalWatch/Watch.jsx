import React, { useEffect, useState } from 'react';

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: true });
  };

  return (
    <div className="flex justify-center items-center h-full everything-card rounded-xl">
      <div className="text-5xl font-mono text-white bg-gray-800 p-4 rounded-lg shadow-lg">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Watch;