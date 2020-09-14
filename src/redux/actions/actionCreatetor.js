import actionTypes from './actionTypes';

const addWord = (words) => {
  return {type: actionTypes.TYPE_ADD_WORD, words};
};
const toggleForm = () => {
  return {type: actionTypes.TYPE_TOGGLE_FORM};
};
const setFilterMode = (filterMode) => {
  return {type: actionTypes.TYPE_SET_FILTER_MODE, filterMode};
};
const toggleWord = (id) => {
  return {type: actionTypes.TYPE_TOGGLE_WORD, id};
};
const removeWord = (id) => {
  return {type: actionTypes.TYPE_REMOVE_WORD, id};
};

export default {addWord, toggleForm, setFilterMode, toggleWord, removeWord};
