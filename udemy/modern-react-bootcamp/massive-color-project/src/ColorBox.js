import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
  text: {
    color: (props) => (chroma.contrast(props.color, 'white') < 4.5 ? 'black' : 'white'),
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isCopied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ isCopied: true }, () => {
      setTimeout(() => this.setState({ isCopied: false }), 1500);
    });
  }
  render() {
    const { name, color, sourcePalette, id, showLink, classes } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={`ColorBox ${classes.text}`} style={{ backgroundColor: color }}>
          <div
            style={{ backgroundColor: color }}
            className={!this.state.isCopied ? 'copy-overlay' : 'copy-overlay show'}
          />
          <div className={!this.state.isCopied ? 'copy-message' : 'copy-message show'}>
            <h1>COPIED!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className="color-name">{name}</span>
            </div>
            <button className={`copy-button ${classes.text}`}>COPY</button>
          </div>
          {showLink ? (
            <Link
              to={`/palette/${sourcePalette}/${id}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span className={`see-more ${classes.text}`}>MORE</span>
            </Link>
          ) : null}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
