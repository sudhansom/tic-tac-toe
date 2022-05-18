export const clickedBtn = (currentPlayer) => {
  return {
    type: "Clicked",
    payload: currentPlayer,
  };
};
