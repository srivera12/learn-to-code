import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles';
import chroma from 'chroma-js';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'purple',
      newColorName: '',
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = () => {
    const newColor = { name: this.state.newColorName, color: this.state.currentColor };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  };
  render() {
    const { colors, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          className={classes.picker}
          width="300px"
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            className={classes.colorNameInput}
            margin="normal"
            variant="filled"
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Color name required', 'Color name must be unique', 'Color already used in palette']}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            type="submit"
            color="primary"
            style={{
              backgroundColor: currentColor,
              color: chroma.contrast(currentColor, 'white') < 4.5 ? 'black' : 'white',
            }}
            disabled={colors.length >= 20}
          >
            {colors.length < 20 ? 'Add Color' : 'Palette Full'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
