import React, { useRef, useState } from "react";

const StopwatchEx = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  const startStopwatch = () => {
    //if the stopwatch was not running then it will go into this if-block
    if (!isRunning) {
      setIsRunning(true);
      console.log("Started....");
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
    console.log("Stopping Stopwatch.....");
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
    setTime(0);
    console.log("Stopwatch resetting.....");
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / 60000);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(Math.floor(milliseconds / 10)).padStart(2, "0")}`;
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startStopwatch} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default StopwatchEx;
