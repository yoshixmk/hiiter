import React from 'react';
import { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { CgFormatSlash } from 'react-icons/cg';
import { RiPauseCircleLine, RiPlayCircleLine, RiStopCircleLine } from 'react-icons/ri';
import { useTimer } from 'react-timer-hook';

export function Timer() {
  const BASE_TIME = 240_000;
  const [expiryMilliSeconds, setExpiryMilliSeconds] = useState(BASE_TIME); // 4 minutes timer
  const {
    seconds,
    minutes,
    // hours,
    // days,
    isRunning,
    start,
    pause,
    // resume,
    restart,
  } = useTimer({
    autoStart: false,
    expiryTimestamp: new Date().getTime() + BASE_TIME,
    onExpire: () => console.warn('onExpire called'),
  });

  const leftFill = (num, targetLength = 2) => {
    return num.toString().padStart(targetLength, 0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{leftFill(minutes)}</span>:<span>{leftFill(seconds)}</span>
      </div>
      <RiPlayCircleLine size="3em" {...(isRunning && { color: 'lightseagreen' })} onClick={start} />
      <RiPauseCircleLine size="3em" {...(!isRunning && { color: 'darkorange' })} onClick={pause} />
      <RiStopCircleLine
        size="3em"
        onClick={() => {
          // Restarts to 4 minutes timer
          restart(new Date().getTime() + expiryMilliSeconds, false);
        }}
      />
      <CgFormatSlash size="3em" />
      <AiOutlineMinusCircle
        size="3em"
        onClick={() => {
          const next = expiryMilliSeconds - BASE_TIME;
          if (next <= 0) return;
          restart(new Date().getTime() + next, false);
          setExpiryMilliSeconds(next);
        }}
      />
      <AiOutlinePlusCircle
        size="3em"
        onClick={() => {
          const next = expiryMilliSeconds + BASE_TIME;
          if (next >= 3600_000) return; // upper 1 hour
          restart(new Date().getTime() + next, false);
          setExpiryMilliSeconds(next);
        }}
      />
    </div>
  );
}
