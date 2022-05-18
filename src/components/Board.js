import React from "react";
import Button from "@mui/material/Button";
import "./board.css";

function Board() {
  return (
    <div className="board">
      <table>
        <tr>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
        </tr>
        <tr>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
        </tr>
        <tr>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
          <Button variant="contained"></Button>
        </tr>
      </table>
    </div>
  );
}

export default Board;
