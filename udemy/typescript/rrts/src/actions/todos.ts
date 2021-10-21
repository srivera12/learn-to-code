// imports
import axios from 'axios';
import { ActionTypes } from './types';
import { Dispatch } from 'redux';

// interface of todo properties
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// interface of the action to fetch todos
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

// interface of the action to delete todos
export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

// todo source
const url = 'https://jsonplaceholder.typicode.com/todos';

// fetch todo action
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

// delete todo action
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
