export function wordReducer(state = [], action) {
  if (action.type === 'TYPE_FETCH_ALL_WORD') {
    return action.words;
  }
  if (action.type === 'ADD_WORD') {
    return action.words;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map((item) => {
      if (item.id === action.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter((item) => {
      if (item.id === action.id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  return state;
}
