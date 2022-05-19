import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const own = useSelector((state) => state.own);
  return (
    <div>
      <h3>
        {own
          ? `Player ${currentPlayer}'s own.`
          : `Player ${currentPlayer}'s Turn...`}
      </h3>
    </div>
  );
}

export default Heading;
