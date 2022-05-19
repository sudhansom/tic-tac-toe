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
    const arr = [0, 1, 2];
    const wonHorizontal = arr.some((row) => {
      return (
        boardState[row][0] === currentPlayerSign &&
        boardState[row][1] === currentPlayerSign &&
        boardState[row][2] === currentPlayerSign
      );
    });
    const wonVertical = arr.some((col) => {
      return (
        boardState[0][col] === currentPlayerSign &&
        boardState[1][col] === currentPlayerSign &&
        boardState[2][col] === currentPlayerSign
      );
    });
    const wonDiagonal1 =
      boardState[0][0] === currentPlayerSign &&
      boardState[1][1] === currentPlayerSign &&
      boardState[2][2] === currentPlayerSign;
    const wonDiagonal2 =
      boardState[0][2] === currentPlayerSign &&
      boardState[1][1] === currentPlayerSign &&
      boardState[0][2] === currentPlayerSign;
    return wonHorizontal || wonVertical || wonDiagonal1 || wonDiagonal2;
  };

  const clickHandle = () => {
    dispatch(clickedBtn(currentPlayer, row, col));
    if (onePlayerOwn()) {
      dispatch(won(currentPlayer));
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
