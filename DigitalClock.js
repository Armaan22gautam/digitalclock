import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming your CSS is in App.css

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="clock-container">
      <h2 className="heading">Digital Clock</h2>
      <h1 className="clock">{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
};

export default DigitalClock;