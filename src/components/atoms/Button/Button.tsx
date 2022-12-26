import TrashIcon from "assets/trashIcon.svg";
import PlusIcon from "assets/plusIcon.svg";
import styles from "./Button.module.css";
import React from "react";
interface ButtonProps {
  variant: "deleteButton" | "createButton";
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant,
  onClick,
  children
}: ButtonProps): JSX.Element {
  const isDeleteButton = variant === "deleteButton";
  return (
    <button className={styles[variant]} onClick={onClick}>
      {isDeleteButton ? "" : children}
      {isDeleteButton ? <TrashIcon /> : <PlusIcon />}
    </button>
  );
}
