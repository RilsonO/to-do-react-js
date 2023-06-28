import { ReactNode, createContext, useEffect, useState } from 'react';

interface TaskType {
  id: string;
  title: string;
  done: boolean;
}

interface ToDoContextType {
  tasks: TaskType[];
  createNewTask: (task: TaskType) => void;
  toggleTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
  countCompletedTasks: () => number;
}

export const ToDoContext = createContext({} as ToDoContextType);

interface ToDoContextProviderProps {
  children: ReactNode;
}

export function ToDoContextProvider({ children }: ToDoContextProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([] as TaskType[]);

  function createNewTask(task: TaskType) {
    setTasks((prev) => [task, ...prev]);
  }

  function toggleTaskDone(id: string) {
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  function countCompletedTasks() {
    return tasks.reduce((count, task) => {
      if (task.done) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  return (
    <ToDoContext.Provider
      value={{
        tasks,
        createNewTask,
        toggleTaskDone,
        deleteTask,
        countCompletedTasks,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
