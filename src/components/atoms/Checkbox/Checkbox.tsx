import styles from "./Checkbox.module.css";
import React from "react";
interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}
export function Checkbox({ checked, onChange }: CheckboxProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkbox} />
    </label>
  );
}
