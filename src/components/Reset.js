import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import "./board.css";
import { reset } from "../redux/actions";

function Reset() {
  const dispatch = useDispatch();
  const numberOfMoves = useSelector((state) => state.numberOfMoves);
  const handleClick = () => {
    dispatch(reset());
  };
  return (
    <div className="resetBtn">
      <Button
        onClick={handleClick}
        disabled={numberOfMoves < 9 ? true : false}
        variant="contained"
      >
        Reset Game
      </Button>
    </div>
  );
}

export default Reset;
