import React from 'react';

function History({ history, goToMove, currentMove }) {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              type="button"
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
                color: move === currentMove ? 'red' : 'black',
              }}
              onClick={() => {
                goToMove(move);
              }}
            >
              {move === 0 ? `Go to game start` : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default History;
