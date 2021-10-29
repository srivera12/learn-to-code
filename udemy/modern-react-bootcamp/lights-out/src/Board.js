import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);
    const flipCell = (y, x) => {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
        this.setState({ board });
      }
    };
    // flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y + 1, x);
    flipCell(y, x - 1);
    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({ hasWon });
  }

  /** Render game board or winning message. */
  render() {
    const gameBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell key={coord} isLit={this.state.board[y][x]} flipCellsAroundMe={this.flipCellsAround.bind(this, coord)} />
        );
      }
      gameBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">{!this.state.hasWon ? 'Lights' : 'You'}</div>
          <div className="neon-blue">{!this.state.hasWon ? 'Out' : 'Won!!!'}</div>
        </div>
        {!this.state.hasWon ? (
          <table className="Board">
            <tbody>{gameBoard}</tbody>
          </table>
        ) : null}
      </div>
    );
  }
}

export default Board;
