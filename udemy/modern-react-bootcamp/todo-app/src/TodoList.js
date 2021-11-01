import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  editTodo(todo) {
    todo.setState({ isEditing: true });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={this.removeTodo}
        edit={this.editTodo}
        isEditing={todo.isEditing}
        update={this.updateTodo}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          To-Do <span>Today, You Need To...</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm add={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
