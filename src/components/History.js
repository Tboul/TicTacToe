import React from 'react';

function History({ history, goToMove, currentMove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                type="button"
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
    </div>
  );
}

export default History;
