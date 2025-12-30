/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, type ReactNode } from "react";

export type Timer = {
  name: string;
  duration: number;
};
type StartAllAction = { type: "START_ALL" };
type StopAllAction = { type: "STOP_ALL" };
type ClearAllAction = { type: "CLEAR_ALL" };


export type TimerStates = {
  isRunning: Record<string, boolean>;

  timers: Timer[];
};
const initalState: TimerStates={
    isRunning: {},
    timers:[]
}

export type TimerContextValue = TimerStates & {
  addTimer: (timerData: Timer) => void;
  startTimer: (name: string) => void;
stopTimer: (name: string) => void;
startAllTimers(): void;
stopAllTimers(): void;
clearAllTimers(): void;


};

type startAction = {
  type: "START_TIMER";
  payload: { name: string };
};

type stopAction = {
  type: "STOP_TIMER";
  payload: { name: string };
};

type addTimerAction={
    type:"ADD_TIMER";
    payload:Timer;
}

type Action= startAction | stopAction | addTimerAction | StartAllAction | StopAllAction | ClearAllAction;
function timerReducer(state: TimerStates, action: Action): TimerStates {
  if (action.type === "START_TIMER") {
    return {
      ...state,
      isRunning: {
        ...state.isRunning,
        [action.payload.name]: true,
      },
    };
  }
  if (action.type === "START_ALL") {
  const updated: Record<string, boolean> = {};
  for (const timer of state.timers) {
    updated[timer.name] = true;
  }
  return { ...state, isRunning: updated };
}
  if (action.type === "STOP_ALL") {
  const updated: Record<string, boolean> = {};
  for (const key in state.isRunning) {
    updated[key] = false;
  }
  return { ...state, isRunning: updated };
}

  if (action.type === "STOP_TIMER") {
    return {
      ...state,
      isRunning: {
        ...state.isRunning,
        [action.payload.name]: false,
      },
    };
  }

  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [...state.timers, action.payload],
      isRunning: {
        ...state.isRunning,
        [action.payload.name]: true,
      },
    };
  }
  if (action.type === "CLEAR_ALL") {
  return {
    timers: [],
    isRunning: {},
  };
}

  return state;
}

export const TimerContext = createContext<TimerContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

export function TimerContextProvider({ children }: TimerContextProviderProps) {
    // const [runningTimers, setRunningTimers] = useState<Record<string, boolean>>({});
   const[timerStates,dispatch]= useReducer(timerReducer,initalState)
  const ctx: TimerContextValue = {
  isRunning: timerStates.isRunning,
  timers: timerStates.timers,

  addTimer(timerData) {
    dispatch({ type: "ADD_TIMER", payload: timerData });
  },

  startTimer(name) {
    dispatch({ type: "START_TIMER", payload: { name } });
  },

  stopTimer(name) {
    dispatch({ type: "STOP_TIMER", payload: { name } });
  },

  startAllTimers() {
    dispatch({ type: "START_ALL" });
  },

  stopAllTimers() {
    dispatch({ type: "STOP_ALL" });
  },
    clearAllTimers() {
    dispatch({ type: "CLEAR_ALL" });
  },
};


  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
