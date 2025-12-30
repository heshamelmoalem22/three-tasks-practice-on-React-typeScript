import { useContext } from "react";
import { TimerContext, type TimerContextValue } from "./timerContext";

export function useTimerContext(): TimerContextValue {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error("TimerContext must be used inside TimerContextProvider");
  return ctx;
}
