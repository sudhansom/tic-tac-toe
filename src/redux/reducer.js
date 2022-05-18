const initialState = {
  currentPlayer: 1,
  boardState: new Array(3).fill().map(() => new Array(3).fill("")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICKED":
      const row = action.payload.row;
      const col = action.payload.col;
      const boardState = state.boardState;
      boardState[row][col] = state.currentPlayer;
      return {
        ...state,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        boardState: boardState,
      };

    default:
      return state;
  }
};

export default reducer;
