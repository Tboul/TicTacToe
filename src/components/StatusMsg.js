import React from 'react';

// const message = winner
//   ?
//   : ;

const StatusMsg = ({ winner, current }) => {
  const gameOver = current.board.every(el => el != null);
  return (
    <div className="status-message ">
      {winner && (
        <>
          The Winner is:{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !gameOver && (
        <>
          Next player is:{' '}
          <span className={current.isXTurn ? 'text-green' : 'text-orang'}>
            {current.isXTurn ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && gameOver && <span className="text-orange">Game Tied! </span>}
    </div>
  );
};

export default StatusMsg;
