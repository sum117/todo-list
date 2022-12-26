import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import React, { useState } from "react";
import styles from "./CreateField.module.css";
interface CreateFieldProps {
  onTaskCreate: (description: string) => void;
}
export function CreateField({ onTaskCreate }: CreateFieldProps): JSX.Element {
  const [value, setValue] = useState("");
  const handleUserInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.currentTarget.value);
  };
  const handleTaskCreate = (): void => {
    onTaskCreate(value);
    setValue("");
  };
  return (
    <form className={styles.createFieldContainer} onSubmit={handleTaskCreate}>
      <Input value={value} onInput={handleUserInput} />
      <Button variant="createButton">Criar</Button>
    </form>
  );
}
