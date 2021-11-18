import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newPaletteName: '',
      showEmoji: true,
      emoji: '',
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleClickOpen = () => {
    this.setState({ open: true, showEmoji: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  chooseEmoji = (emoji) => {
    this.setState({ emoji: emoji.native, showEmoji: false });
  };
  render() {
    const { open, newPaletteName, emoji, showEmoji } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Save Palette
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Choose A Name and Emoji For Your New Palette</DialogTitle>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName, emoji)}>
            <DialogContent>
              <DialogContentText>Please enter a name for your new palette.</DialogContentText>
              <TextValidator
                value={newPaletteName}
                name="newPaletteName"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Palettes must have a name', 'Palette name already used']}
              />
              <DialogContentText>Please select an emoji for your new palette.</DialogContentText>
              {showEmoji ? (
                <Picker onSelect={this.chooseEmoji} title="Select palette emoji" />
              ) : (
                <div>
                  {`You selected ${emoji}`}
                  <Button
                    onClick={() => {
                      this.setState({ showEmoji: true });
                    }}
                    color="primary"
                  >
                    Change Emoji?
                  </Button>
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit" style={{ pointerEvents: 'auto' }}>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
