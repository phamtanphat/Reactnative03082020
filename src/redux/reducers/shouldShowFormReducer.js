export function shouldShowFormReducer(state = false, action) {
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  return state;
}
