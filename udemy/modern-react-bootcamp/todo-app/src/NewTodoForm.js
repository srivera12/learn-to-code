import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add({ ...this.state, id: uuidv4() });
    this.setState({
      task: '',
    });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New ToDo</label>
        <input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
        <button>Add Todo!</button>
      </form>
    );
  }
}

export default NewTodoForm;
