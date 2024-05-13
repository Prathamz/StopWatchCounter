import React from "react";
import { useRef, useState } from "react";
import "./stopWatchTimer.css";
function StopWatchTimer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <div className="timer-container">
        <div className="timer">Count : {count}</div>
        <div className="button-container">
          <button onClick={startTimer} className="start-button">
            Start
          </button>
          <button onClick={pauseTimer} className="pause-button">
            Pause
          </button>
          <button onClick={resetTimer} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatchTimer;
