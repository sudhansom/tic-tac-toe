import React, { useState } from "react";
import "./board.css";
import MButton from "./MButton";

function Board() {
  const [currentPlayer, setCurrentPlayer] = useState("1");
  const BOARD_WIDTH = 3;
  const boardState = new Array(BOARD_WIDTH)
    .fill()
    .map(() => new Array(BOARD_WIDTH).fill("x"));
  console.log("state", boardState);
  const handleClick = (e) => {
    if (currentPlayer === "1") {
      setCurrentPlayer("2");
    } else {
      setCurrentPlayer("1");
    }
  };
  return (
    <div className="board">
      <table role={"grid"}>
        <tbody>
          {boardState.map((col, indx) => (
            <tr key={indx}>
              {col.map((cell, i) => (
                <td key={indx.toString() + i.toString()}>
                  <MButton keys={indx.toString() + i.toString()} />
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
