import Button from "./Button";
import { useTimerContext } from "./store/useTimerContext";

export default function Header() {
  const timerCtx = useTimerContext();

  return (
    <header className="header2">
      <h1 >Task Timer</h1>
      <div className="clear">

       {timerCtx.timers.length > 0 &&
        <Button 
  onClick={() => {
    if (confirm("Are you sure you want to clear all timers?")) {
      timerCtx.clearAllTimers();
    }
  }}
>
  Clear All
</Button>
       }

     <Button
  onClick={
    Object.values(timerCtx.isRunning).some(Boolean)
      ? timerCtx.stopAllTimers
      : timerCtx.startAllTimers
  }
>
  {Object.values(timerCtx.isRunning).some(Boolean)
    ? "Stop ⏰"
    : "Start ⏰"}
</Button>
      </div>

    </header>
  );
}
