import React from "react";
import { useTimer } from "react-timer-hook";

// @see https://github.com/amrlabib/react-timer-hook#example

export function Timer({ expiryTimestamp }: { expiryTimestamp: number }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 4 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 240);
        restart(time.getTime())
      }}>Restart</button>
    </div>
  );
}
