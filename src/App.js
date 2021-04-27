import React from 'react';
import Board from './components/Board';
import './components/styles/root.css';
function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
