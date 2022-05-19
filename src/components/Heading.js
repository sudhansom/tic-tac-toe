import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const own = useSelector((state) => state.own);
  return (
    <div>
      {own ? (
        <h3 className="won">Player {currentPlayer} own.</h3>
      ) : (
        <h2 className="playing">Player {currentPlayer}'s Turn...</h2>
      )}
    </div>
  );
}

export default Heading;
