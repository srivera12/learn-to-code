import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

class DraggableColorList extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div style={{ height: '100%' }}>
        {colors.map((color, i) => (
          <DraggableColorBox
            key={color.name}
            index={i}
            name={color.name}
            color={color.color}
            deleteColorBox={() => this.props.deleteColorBox(color.name)}
          />
        ))}
      </div>
    );
  }
}

export default SortableContainer(DraggableColorList);
