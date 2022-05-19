export const clickedBtn = (currentPlayer, row, col) => {
  return {
    type: "CLICKED",
    payload: {
      currentPlayer,
      row,
      col,
    },
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const own = (currentPlayer) => {
  return {
    type: "GAME_OWN",
    payload: currentPlayer,
  };
};
