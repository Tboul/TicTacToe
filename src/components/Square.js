import React from 'react';

const Square = ({ value, click, isWinLine }) => {
  return (
    <button
      type="button"
      onClick={click}
      className={`square ${isWinLine ? 'winning' : ''} 
      ${value === 'X' ? 'text-green' : 'text-orange'}`}
    >
      {value}
    </button>
  );
};

export default Square;
