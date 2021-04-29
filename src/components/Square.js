import React from 'react';

const Square = ({ value, click, isWinLine }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={click}
      style={{
        fontWeight: isWinLine ? 'bold' : 'normal',
        color: isWinLine ? 'red' : 'black',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
