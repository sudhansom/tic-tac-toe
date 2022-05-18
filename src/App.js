import "./App.css";
import Heading from "./components/Heading";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1>Game Board</h1>
      <Heading />
      <Board />
    </div>
  );
}

export default App;
