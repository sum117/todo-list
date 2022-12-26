import styles from "./App.module.css";
import Logo from "assets/logo.svg";
import Clipboard from "assets/clipboard.svg";
import CreateField from "components/molecules/CreateField";
import Task from "components/molecules/Task";
import React, { useState } from "react";
import { TaskProps } from "components/molecules/Task/Task";

export function App(): JSX.Element {
  const localTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState<TaskProps[]>(
    localTasks !== null ? JSON.parse(localTasks) : []
  );

  const handleTask = (tasks: TaskProps[]): void => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };
  // Funções
  const checkTask = (id: string): void => {
    const checkedTask = tasks.find((task) => task.id === id);
    if (checkedTask != null) {
      checkedTask.checked = !checkedTask.checked;
    }
    handleTask([...tasks]);
  };
  const deleteTask = (id: string): void => {
    handleTask(tasks.filter((task) => task.id !== id));
  };
  const createTask = (description: string): void => {
    const newTask = {
      id: crypto.randomUUID(),
      description,
      checked: false
    };
    handleTask([...tasks, newTask]);
  };

  // Booleanos
  const hasTasks = tasks.length > 0;
  const checkedTasks = tasks.filter((task) => task.checked);
  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>
      <main>
        <div className={styles.layout}>
          <CreateField onTaskCreate={createTask} />
          <div className={styles.counterRow}>
            <p className={styles.counter}>
              <b>Tarefas criadas</b> <span>{tasks.length}</span>
            </p>

            <p className={styles.counter}>
              <b>Concluídas</b>{" "}
              <span>{`${checkedTasks.length} de ${tasks.length}`}</span>
            </p>
          </div>
          {hasTasks &&
            tasks.map((task: TaskProps, index) => (
              <Task
                id={task.id}
                onTaskCheck={checkTask}
                checked={task.checked}
                description={task.description}
                key={task.id}
                onDeleteTask={deleteTask}
              />
            ))}
          {!hasTasks && (
            <div className={styles.empty}>
              <Clipboard />
              <p>
                <b>Você ainda não tem tarefas criadas</b>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
