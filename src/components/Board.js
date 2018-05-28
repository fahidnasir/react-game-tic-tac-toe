import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isPlayerOne: true
    };
  }

  playerMove(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isPlayerOne ? 'X' : 'O';
    this.setState({
      squares: squares,
      isPlayerOne: !this.state.isPlayerOne
    });
  }

  renderCell(i) {
    return (
      <Cell
        value={this.state.squares[i]}
        id={'cell-' + i}
        onClick={() => this.playerMove(i)}
      />
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Current Player: ${this.state.isPlayerOne ? 'X' : 'O'}`;
    }

    return (
      <div className="container">
        <div className="status">{status}</div>
        <div className="board">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

export default Board;
