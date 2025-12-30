import type { PropsWithChildren } from "react";
import { type courseGoal } from "../App";

type MyGoalsProps = PropsWithChildren<{
  title: string;
  description: string;
  id: number;
  onDeleteGoal: (id: number) => void;
  onEditGoal: () => void;
  editingGoal: courseGoal | null;
}>;

export default function MyGoals({
  title,
  id,
  onDeleteGoal,
  onEditGoal,
  children,
  editingGoal,
}: MyGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      <p style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem" }}>
        
        <button
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bolder",
            color: "#9E9E9E",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: editingGoal ? "not-allowed" : "pointer",
            opacity: editingGoal ? 0.5 : 1,
          }}
          onClick={() => { if (!editingGoal) onDeleteGoal(id); }}
          disabled={!!editingGoal}
        >
          🗑
        </button>

        
        <button
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#1f4cd7",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={onEditGoal}
        >
          🖊
        </button>
      </p>
    </article>
  );
}
