import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { color: '#d75915' },
        { color: '#641210' },
        { color: '#cba134' },
        { color: '#5f8921' },
        { color: '#8a1b61' },
        { color: '#3c619b' },
        { color: '#7b4931' },
        { color: '#6e7710' },
      ],
    };
    this.removeBox = this.removeBox.bind(this);
    this.addBox = this.addBox.bind(this);
  }
  addBox(box) {
    this.setState({
      boxes: [...this.state.boxes, box],
    });
  }
  removeBox(key) {
    const lessBoxes = this.state.boxes.filter((box) => box !== this.state.boxes[key]);
    this.setState({ boxes: lessBoxes });
  }
  render() {
    return (
      <div className="BoxList">
        {this.state.boxes.map((box) => (
          <Box
            key={uuidv4()}
            backgroundColor={box.color}
            width={box.width}
            height={box.height}
            remove={this.removeBox.bind(this, this.state.boxes.indexOf(box))}
          />
        ))}
        <NewBoxForm add={this.addBox} />
      </div>
    );
  }
}

export default BoxList;
