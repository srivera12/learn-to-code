// imports
import { DeleteTodoAction, FetchTodosAction } from '.';

// possible actions
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

// possible actions for the reducer
export type Action = FetchTodosAction | DeleteTodoAction;
