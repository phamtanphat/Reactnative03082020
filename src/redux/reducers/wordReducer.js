export function wordReducer(state = [], action) {
  if (action.type === 'TYPE_FETCH_ALL_WORD') {
    return action.words;
  }
  if (action.type === 'TYPE_FETCH_INSERT_WORD') {
    return state.concat(action.word);
  }
  if (action.type === 'TYPE_FETCH_TOGGLE_WORD') {
    const newWords = state.map((item) => {
      if (item._id === action._id) {
        return action.word;
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'TYPE_FETCH_REMOVE_WORD') {
    const newWords = state.filter((item) => {
      if (item._id === action._id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  return state;
}
