import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMsg from './components/StatusMsg';
import { calculateWinner } from './helpers';

import './components/styles/root.css';

function App() {
  const InitGame = [{ board: Array(9).fill(null), isXTurn: true }];
  const [history, setHistory] = useState(InitGame);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winLine } = calculateWinner(current.board);

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
  const onNewGame = () => {
    setHistory(InitGame);
    setCurrentMove(0);
  };
  return (
    <div className="app ">
      <h1>Tic Tac Toe</h1>
      <StatusMsg winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winLine={winLine}
      />
      <button type="button" onClick={onNewGame}>
        New Game
      </button>
      <History
        history={history}
        goToMove={goToMove}
        currentMove={currentMove}
      />
    </div>
  );
}

export default App;
