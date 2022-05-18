import React, { useState } from "react";
import Button from "@mui/material/Button";

function MButton({ boardState, row, col }) {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [state, setState] = useState("");
  const clickHandle = () => {
    boardState[row][col] = currentPlayer;
    setState(currentPlayer);
    currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
  };
  console.log(boardState);
  return (
    <Button onClick={clickHandle} className="game-square" variant="contained">
      {state}
    </Button>
  );
}

export default MButton;
