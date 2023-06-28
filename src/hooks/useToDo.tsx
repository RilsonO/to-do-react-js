import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export function useToDo() {
  const context = useContext(ToDoContext);
  return context;
}
