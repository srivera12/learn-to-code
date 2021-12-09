import { useState } from 'react';
import uuid from 'uuid/dist/v4';

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, isCompleted: false, isBeingEditted: false }]);
    },
    toggleComplete: (id) => {
      const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
      setTodos(updatedTodos);
    },
    deleteTodo: (id) => {
      const lessTodos = todos.filter((todo) => todo.id !== id);
      setTodos(lessTodos);
    },
    editTodo: (id, updatedTask) => {
      const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, task: updatedTask } : todo));
      setTodos(updatedTodos);
    },
    clearTodos: () => {
      setTodos([]);
    },
  };
};
