import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = ({ title }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <h2>{title}</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <div className="timer-buttons">
        <button className='start' onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button className='stop' onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
