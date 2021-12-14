import uuid from 'uuid/dist/v4';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, isCompleted: false, isBeingEditted: false }];
    case 'TOGGLECOMPLETE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    case 'EDIT':
      return state.map((todo) => (todo.id === action.id ? { ...todo, task: action.update } : todo));
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export default todoReducer;
