import React from "react";
import Button from "@mui/material/Button";
import "./board.css";

function Board() {
  return (
    <div className="board">
      <table role={"grid"}>
        <tr>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
          <td>
            <Button className="game-square" variant="contained"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Board;
