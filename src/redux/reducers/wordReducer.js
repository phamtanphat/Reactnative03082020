const worddefault = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
];

export function wordReducer(state = worddefault, action) {
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
