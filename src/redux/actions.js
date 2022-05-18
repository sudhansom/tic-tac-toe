export const clickedBtn = (currentPlayer, row, col) => {
  return {
    type: "Clicked",
    payload: {
      currentPlayer,
      row,
      col,
    },
  };
};
