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

export const won = (currentPlayer) => {
  return {
    type: "GAME_WON",
    payload: currentPlayer,
  };
};
