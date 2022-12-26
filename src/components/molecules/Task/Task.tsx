import Button from "components/atoms/Button";
import Checkbox from "components/atoms/Checkbox";
import styles from "./Task.module.css";
import React from "react";
export interface TaskProps {
  id: string;
  checked: boolean;
  description: string;
  onDeleteTask?: (id: string) => void;
  onTaskCheck?: (id: string) => void;
}
export function Task({
  id,
  checked,
  description,
  onDeleteTask,
  onTaskCheck
}: TaskProps): JSX.Element {
  const handleTaskDelete = (): void => {
    if (onDeleteTask != null) {
      onDeleteTask(id);
    }
  };
  const handleTaskCheck = (): void => {
    if (onTaskCheck != null) {
      onTaskCheck(id);
    }
  };
  return (
    <div className={styles.task} itemID={id}>
      <Checkbox checked={checked} onChange={handleTaskCheck} />
      <p
        className={`
      ${styles.taskDescription} + ${checked ? styles.checked : ""}
      `}
      >
        {description}
      </p>
      <Button variant="deleteButton" onClick={handleTaskDelete} />
    </div>
  );
}
