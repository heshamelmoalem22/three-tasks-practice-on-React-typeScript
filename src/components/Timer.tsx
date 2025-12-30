/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from "react";
import type { Timer as TimerProps } from "./store/timerContext";
import toast from "react-hot-toast";
import { useTimerContext } from "./store/useTimerContext";

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const hasStarted = useRef(false);
  const [isRemaining, setIsRemaining] = useState(duration * 1000);
  const { isRunning, startTimer, stopTimer } = useTimerContext();
const running = isRunning[name];

  
 useEffect(() => {
  if (running) {
    const timer = setInterval(() => {
      setIsRemaining((prev) => prev - 50);
    }, 50);

    interval.current = timer;
  } else if (interval.current) {
    clearInterval(interval.current);
    interval.current = null;
  }

  return () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };
}, [running]);

 useEffect(() => {
  if (running && !hasStarted.current) {
    toast.success(`Timer "${name}" started! ⏱️`);
    hasStarted.current = true;
  }
}, [running, name]);


  
  useEffect(() => {
    if (isRemaining <= 0 && interval.current) {
      clearInterval(interval.current);
      interval.current = null;

      toast.success(`Timer "${name}" ended! ⏰`);
    }
  }, [isRemaining, name]);

  const formattedTime = Math.max(isRemaining, 0) / 1000;
  
  return (
    <article>
      <h2>{name}</h2>

      {isRemaining > 0 ? (
        <>
          <p>
            <progress
              max={duration * 1000}
              value={isRemaining}
            />
          </p>
          <p>{formattedTime.toFixed(2)}</p>
        <button
  onClick={() =>
    running ? stopTimer(name) : startTimer(name)
  }
>
  {running ? "Stop" : "Start"}
</button>
        </>
      ) : (
        <p>Time's up!</p>
      )}
    </article>
  );
}
