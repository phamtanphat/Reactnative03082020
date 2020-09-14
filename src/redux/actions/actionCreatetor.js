import actionTypes from './actionTypes';

const addWord = (words) => {
  return {type: actionTypes.TYPE_ADD_WORD, words};
};
const toggleForm = () => {
  return {type: actionTypes.TYPE_TOGGLE_FORM};
};

export default {addWord, toggleForm};
