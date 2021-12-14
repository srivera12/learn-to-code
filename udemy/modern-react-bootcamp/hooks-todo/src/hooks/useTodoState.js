import uuid from 'uuid/dist/v4';
import { useLocalStorageState } from './useLocalStorageState';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, isCompleted: false }]);
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
