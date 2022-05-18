import React, { useState } from "react";
import "./board.css";
import MButton from "./MButton";

function Board() {
  const BOARD_WIDTH = 3;
  const boardState = new Array(BOARD_WIDTH)
    .fill()
    .map(() => new Array(BOARD_WIDTH).fill(""));
  console.log("state", boardState);
  return (
    <div className="board">
      <table role={"grid"}>
        <tbody>
          {boardState.map((col, row) => (
            <tr key={row}>
              {col.map((cell, col) => (
                <td key={row.toString() + col.toString()}>
                  <MButton boardState={boardState} row={row} col={col} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
