const initialState = {
  own: false,
  numberOfMoves: 0,
  currentPlayer: 1,
  boardState: new Array(3).fill().map(() => new Array(3).fill("")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICKED":
      const row = action.payload.row;
      const col = action.payload.col;
      const boardState = state.boardState;
      boardState[row][col] = state.currentPlayer === 1 ? "X" : "O";
      return {
        ...state,
        numberOfMoves: state.numberOfMoves + 1,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        boardState: boardState,
      };

    case "RESET":
      return {
        own: false,
        numberOfMoves: 0,
        currentPlayer: 1,
        boardState: new Array(3).fill().map(() => new Array(3).fill("")),
      };

    case "GAME_OWN":
      return {
        ...state,
        currentPlayer: action.payload,
        own: true,
      };

    default:
      return state;
  }
};

export default reducer;
