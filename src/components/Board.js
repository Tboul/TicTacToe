import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);

  const handleSquareClick = position => {
    setBoard(prev => {
      return prev.map((arrayValue, index) => {
        if (index === position) {
          return 'X';
        }
        return arrayValue;
      });
    });
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        click={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
