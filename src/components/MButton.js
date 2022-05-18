import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { clickedBtn } from "../redux/actions";

import "./board.css";

function MButton({ row, col }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const boardState = state.boardState;
  const currentPlayer = state.currentPlayer;
  const clickHandle = () => {
    dispatch(clickedBtn(currentPlayer, row, col));
  };
  console.log(boardState);
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
