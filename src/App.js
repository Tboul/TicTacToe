import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';

import './components/styles/root.css';

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXTurn: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `The Winner is: ${winner} !`
    : `Next player is:  ${current.isXTurn ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((arrayValue, index) => {
        if (index === position) {
          return last.isXTurn ? 'X' : 'O';
        }
        return arrayValue;
      });
      return prev.concat({ board: newBoard, isXTurn: !last.isXTurn });
    });
    setCurrentMove(prev => prev + 1);
  };
  const goToMove = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app ">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History
        history={history}
        goToMove={goToMove}
        currentMove={currentMove}
      />
    </div>
  );
}

export default App;
