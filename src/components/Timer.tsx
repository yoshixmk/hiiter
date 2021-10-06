import { useEffect, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { CgFormatSlash } from 'react-icons/cg';
import { RiPauseCircleLine, RiPlayCircleLine, RiStopCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { cycleSlice } from 'store/cycle';

export function Timer(): JSX.Element {
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
    expiryTimestamp: new Date(new Date().getTime() + BASE_TIME),
    onExpire: () => console.warn('onExpire called'),
  });

  const dispatch = useDispatch();
  const INTERVAL = 30;
  useEffect(() => {
    const timeLeft = seconds + 60 * minutes;
    const positionNumber = getPositionNumber({
      expirySeconds: expiryMilliSeconds / 1000,
      timeLeft,
      interval: INTERVAL
    });

    let remainingCount = null;
    // should not show 0 when it first-time
    if (expiryMilliSeconds / 1000 !== timeLeft) {
      remainingCount = timeLeft % INTERVAL;
    }
    const handleUpdate = (positionNumber) => {
      dispatch(
        cycleSlice.actions.updateFocus({
          positionNumber,
          isRunning,
          remainingCount,
        })
      );
    };
    handleUpdate(positionNumber);
  }, [expiryMilliSeconds, minutes, seconds, dispatch, isRunning]);

  const leftFill = (num, targetLength = 2) => {
    return num.toString().padStart(targetLength, 0);
  };

  return (
    <div style={{ textAlign: 'center', marginRight: '2rem' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{leftFill(minutes)}</span>:<span>{leftFill(seconds)}</span>
      </div>
      <RiPlayCircleLine size="3em" {...(isRunning && { color: 'lightseagreen' })} onClick={start} />
      <RiPauseCircleLine size="3em" {...(!isRunning && { color: 'darkorange' })} onClick={pause} />
      <RiStopCircleLine
        size="3em"
        onClick={() => {
          // Restarts to 4 minutes timer
          restart(new Date(new Date().getTime() + expiryMilliSeconds), false);
        }}
      />
      <CgFormatSlash size="3em" />
      <AiOutlineMinusCircle
        size="3em"
        onClick={() => {
          const next = expiryMilliSeconds - BASE_TIME;
          if (next <= 0) return;
          restart(new Date(new Date().getTime() + next), false);
          setExpiryMilliSeconds(next);
        }}
      />
      <AiOutlinePlusCircle
        size="3em"
        onClick={() => {
          const next = expiryMilliSeconds + BASE_TIME;
          if (next >= 3600_000) return; // upper 1 hour
          restart(new Date(new Date().getTime() + next), false);
          setExpiryMilliSeconds(next);
        }}
      />
    </div>
  );
}

type PositionCalcParam = {
  expirySeconds: number;
  timeLeft: number;
  interval: number;
  separatorNum?: number;
}
export function getPositionNumber({
  expirySeconds, timeLeft, interval, separatorNum = 4
}: PositionCalcParam): number {
  return Math.floor(((expirySeconds - timeLeft) / interval) % separatorNum) + 1;
}

