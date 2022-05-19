import "./App.css";
import Button from "@mui/material/Button";

import Heading from "./components/Heading";
import Board from "./components/Board";
import Reset from "./components/Reset";

function App() {
  return (
    <div className="App">
      <div className="game-board">
        <h1>TIC TAC TOE</h1>
        <Heading />
        <Board />
        <Reset />
      </div>
    </div>
  );
}

export default App;
