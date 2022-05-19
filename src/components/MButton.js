import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { clickedBtn, won } from "../redux/actions";

import "./board.css";

function MButton({ row, col }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const boardState = state.boardState;
  const currentPlayer = state.currentPlayer;
  const currentPlayerSign = currentPlayer === 1 ? "X" : "O";

  const onePlayerOwn = () => {
    if (
      boardState[0][0] === "X" &&
      boardState[0][1] === "X" &&
      boardState[0][2] === "X"
    ) {
      dispatch(won(currentPlayer));
      return true;
    } else {
      return false;
    }
  };

  const clickHandle = () => {
    dispatch(clickedBtn(currentPlayer, row, col));
    if (onePlayerOwn()) {
      console.log(`player ${currentPlayer} won the game.`);
    }
  };

  return (
    <Button
      onClick={clickHandle}
      className="game-square"
      disabled={boardState[row][col] !== ""}
      variant="contained"
    >
      {boardState[row][col]}
    </Button>
  );
}

export default MButton;
