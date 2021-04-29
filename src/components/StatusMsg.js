import React from 'react';

// const message = winner
//   ?
//   : ;

const StatusMsg = ({ winner, current }) => {
  const gameOver = current.board.every(el => el != null);
  return (
    <h2>
      {winner && `The Winner is: ${winner} !`}
      {!winner &&
        !gameOver &&
        `Next player is:  ${current.isXTurn ? 'X' : 'O'}`}
      {!winner && gameOver && `Game Tied!`}
    </h2>
  );
};

export default StatusMsg;
