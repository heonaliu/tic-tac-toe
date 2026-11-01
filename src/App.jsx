import { useState } from "react";
import "./App.css";

function App() {

  // these are all the ways you can win
  // imagining a grid 0-8 like this:
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
  [0, 4, 8], [2, 4, 6],            // diagonal
];

  return (
    <>
      <h2>Hello, World!</h2>
    </>
  );
}

export default App;
