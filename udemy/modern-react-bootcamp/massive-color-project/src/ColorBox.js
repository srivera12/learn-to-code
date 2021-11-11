import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

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
    const { name, color } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
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
            <button className="copy-button">COPY</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
