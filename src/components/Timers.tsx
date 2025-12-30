import { useTimerContext } from "./store/useTimerContext";
import Timer from "./Timer";

export default function Timers() {
    const{ timers }= useTimerContext();

  return (
    <ul className="tasks">
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}