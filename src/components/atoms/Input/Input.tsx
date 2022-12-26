import styles from "./Input.module.css";
import React from "react";
interface InputProps {
  className?: string;
  value: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ value, onInput }: InputProps): JSX.Element {
  return (
    <input
      type="text"
      value={value}
      required
      onInput={onInput}
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  );
}
