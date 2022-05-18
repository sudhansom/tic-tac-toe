import React from "react";
import Button from "@mui/material/Button";
import "./board.css";

function Reset() {
  return (
    <div className="resetBtn">
      <Button variant="contained">Reset Game</Button>
    </div>
  );
}

export default Reset;
