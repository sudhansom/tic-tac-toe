import "./App.css";

import Heading from "./components/Heading";
import Board from "./components/Board";
import Reset from "./components/Reset";

function App() {
  return (
    <div className="App">
      <h1>Game Board</h1>
      <Heading />
      <Board />
      <Reset />
    </div>
  );
}

export default App;
