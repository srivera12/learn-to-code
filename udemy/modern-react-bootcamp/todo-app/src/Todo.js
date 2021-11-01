import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false,
      isComplete: false,
    };
  }
  remove = () => {
    this.props.remove(this.props.id);
  };
  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  toggleComplete = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
            <button>Save Changes</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li className={this.state.isComplete ? 'Todo-task completed' : 'Todo-task'}>{this.props.task}</li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen"></i>
            </button>
            <button onClick={this.remove}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
