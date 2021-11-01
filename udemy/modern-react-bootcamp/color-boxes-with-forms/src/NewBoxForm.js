import React, { Component } from 'react';
import './NewBoxForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      height: '',
      width: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, key: uuidv4() };
    this.props.add(newBox);
    this.setState({
      color: '',
      height: '',
      width: '',
    });
  }
  render() {
    return (
      <form className="NewBoxForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="color">Box Color</label>
          <input type="text" name="color" id="color" value={this.state.color} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="height">Box Height</label>
          <input type="text" name="height" id="height" value={this.state.height} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="width">Box Width</label>
          <input type="text" name="width" id="width" value={this.state.width} onChange={this.handleChange} />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewBoxForm;
