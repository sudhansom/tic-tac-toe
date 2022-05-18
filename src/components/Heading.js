import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const currentPlayer = useSelector((state) => state.currentPlayer);
  return (
    <div>
      <h3>Player {currentPlayer}'s Turn...</h3>
    </div>
  );
}

export default Heading;
