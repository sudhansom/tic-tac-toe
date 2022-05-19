import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import "./board.css";
import { reset } from "../redux/actions";

function Reset() {
  const dispatch = useDispatch();
  const numberOfMoves = useSelector((state) => state.numberOfMoves);
  const won = useSelector((state) => state.won);
  const show = numberOfMoves < 9 && !won;
  console.log("show", show);
  const handleClick = () => {
    dispatch(reset());
  };
  return (
    <div className="resetBtn">
      <Button
        onClick={handleClick}
        disabled={show ? true : false}
        variant="contained"
      >
        Reset Game
      </Button>
    </div>
  );
}

export default Reset;
