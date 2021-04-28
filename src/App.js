import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './components/styles/root.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const winner = calculateWinner(board);
  const message = winner
    ? `The Winner is: ${winner} !`
    : `Next player is:  ${isXTurn ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((arrayValue, index) => {
        if (index === position) {
          return isXTurn ? 'X' : 'O';
        }
        return arrayValue;
      });
    });
    setisXTurn(prev => !prev);
  };

  return (
    <div className="app ">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
