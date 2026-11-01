import { useState } from "react";
import "./App.css";
import leaf from "/Users/heona/Documents/Projects-Summer/tic-tac-toe/src/assets/leaf.png";
import pumpkin from "/Users/heona/Documents/Projects-Summer/tic-tac-toe/src/assets/pumpkin.png";

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
  X: { name: "Leaf", icon: leaf },
  O: { name: "Pumpkin", icon: pumpkin },
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
  return (
    <span className="icon">
      <img src={PLAYERS[player].icon} alt={PLAYERS[player].name} />
    </span>
  );
}

function Square({ value, onClick, isWinning }) {
  return (
    <button
      onClick={onClick}
      className={`square ${isWinning ? "winning" : ""}`}
    >
      {value && <PlayerIcon player={value} />}
    </button>
  );
}

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const xNext = squares.filter(Boolean).length % 2 === 0;
  // this finds whos turn is it. By filtering by boolean, it keeps only the truthy values in the array

  const current = xNext ? "X" : "O"; // decides which symbol to put down
  const winner = calculateWinner(squares); // checking if anyone won here
  const isDraw = !winner && squares.every(Boolean);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const next = [...squares]; // takes the copy
    next[i] = current;
    setSquares(next); // update the array again after clicking
  }

  function resetGame() {
    setSquares(Array(9).fill(null)); // clear
  }

  let status;
  if (winner)
    status = (
      <>
        {PLAYERS[winner.player].name} wins!{" "}
        <PlayerIcon player={winner.player} />
      </>
    );
  else if (isDraw) status = "Draw ! 🍂";
  else
    status = (
      <>
        Next: {PLAYERS[current].name} <PlayerIcon player={current} />
      </>
    );

  return (
    <>
      <main>
        <h1>Fall Tac Toe</h1>

        <div className="board">
          {squares.map((value, i) => (
            <Square
              key={i}
              value={value}
              onClick={() => handleClick(i)}
              isWinning={winner?.line.includes(i)}
            />
          ))}
        </div>
        <div className="status">{status}</div>
        <button onClick={resetGame}>Reset Game</button>
      </main>
    </>
  );
}
