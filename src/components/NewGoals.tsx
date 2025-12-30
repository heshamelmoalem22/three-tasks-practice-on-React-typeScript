/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { type courseGoal } from "../App";

type NewGoalsProps = {
  onAddGoal: (title: string, desc: string) => void;
  onUpdateGoal: (id: number, title: string, desc: string) => void;
  editingGoal: courseGoal | null;
  
};

export default function NewGoals({
  onAddGoal,
  onUpdateGoal,
  editingGoal,
}: NewGoalsProps) {
  const [isValid, setIsValid] = useState(false);
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingGoal && goal.current && summary.current) {
      goal.current.value = editingGoal.title;
      summary.current.value = editingGoal.description;
      setIsValid(true);
    }
  }, [editingGoal]);

  function checkValidity() {
    const g = goal.current?.value.trim() ?? "";
    const s = summary.current?.value.trim() ?? "";
    setIsValid(g.length > 0 && s.length > 0);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingGoal) {
      onUpdateGoal(
        editingGoal.id,
        goal.current!.value,
        summary.current!.value
      );
      toast.success("Goal updated successfully!");
    } else {
      onAddGoal(goal.current!.value, summary.current!.value);
      toast.success("Goal added successfully!");
    }

    e.currentTarget.reset();
    setIsValid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Task Title</label>
        <input type="text" id="goal" ref={goal} onInput={checkValidity} />
      </p>

      <p>
        <label htmlFor="summary">Task summary</label>
        <input type="text" id="summary" ref={summary} onInput={checkValidity} />
      </p>

      <p>
        <button type="submit" disabled={!isValid}>
          {editingGoal ? "Update Task" : "Add Tasks"}
        </button>
      </p>
    </form>
  );
}
