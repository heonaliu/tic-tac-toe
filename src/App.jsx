import { useState } from "react";
import "./App.css";

// these are all the ways you can win
// imagining a grid 0-8 like this:
// 0 1 2
// 3 4 5
// 6 7 8
const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // row
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // column
  [0, 4, 8],
  [2, 4, 6], // diagonal
];

const PLAYERS = {
  X: { name: "Leaf", icon: "🍂" },
  O: { name: "Pumpkin", icon: "🎃" },
};

function calculateWinner(squares) {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function PlayerIcon({ player }) {
  return <span className="icon">{PLAYERS[player].icon}</span>;
}

function Square({value, onClick, isWinning}) {
  return (
    <button onClick={onClick} className={isWinning ? "winning" : ""}>
      {value && <PlayerIcon player={value} />}
    </button>
  )
}

function App() {
  return (
    <>
      <h2>Hello, World!</h2>
    </>
  );
}

export default App;
