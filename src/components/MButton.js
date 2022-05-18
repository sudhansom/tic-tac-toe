import React, { useState } from "react";
import Button from "@mui/material/Button";

function MButton({ keys }) {
  const [state, setState] = useState("");
  const clickHandle = () => {
    console.log("clicked", keys);
  };
  return (
    <Button onClick={clickHandle} className="game-square" variant="contained">
      {state}
    </Button>
  );
}

export default MButton;
