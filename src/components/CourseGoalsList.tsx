import MyGoals from "./myGoals";
import { type courseGoal } from "../App";
import InfoBox from "./infoBox";
import type { ReactNode } from "react";

type Props = {
  goals: courseGoal[];
  onDeleteGoal: (id: number) => void;
  onEditGoal: (goal: courseGoal) => void;
  editingGoal: courseGoal | null;
};

export default function CourseGoalsList({
  goals,
  onDeleteGoal,
  onEditGoal,
  editingGoal,
}: Props) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="Hint">
        <p>No goals found. Maybe add one?</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="Warning">
        <p>You have reached the maximum number of goals allowed.</p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <MyGoals
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDeleteGoal={onDeleteGoal}
              onEditGoal={() => onEditGoal(goal)}
              editingGoal={editingGoal}
            >
              <p>{goal.description}</p>
            </MyGoals>
          </li>
        ))}
      </ul>
    </>
  );
}
