import actionTypes from './actionTypes';
import Axios from 'axios';

const url = 'https://serverword03082020.herokuapp.com/word';

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

const fetchAllWord = () => {
  return (dispatch) => {
    Axios.get(url)
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.TYPE_FETCH_ALL_WORD,
            words: response.data.words,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};

export default {
  addWord,
  toggleForm,
  setFilterMode,
  toggleWord,
  removeWord,
  fetchAllWord,
};
