import actionTypes from './actionTypes';
import Axios from 'axios';

const url = 'https://serverword03082020.herokuapp.com/word/';

const fetchInsertWord = (word) => {
  return (dispatch) => {
    Axios.post(url, {en: word.en, vn: word.vn})
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.TYPE_FETCH_INSERT_WORD,
            word: response.data.word,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};
const toggleForm = () => {
  return {type: actionTypes.TYPE_TOGGLE_FORM};
};
const setFilterMode = (filterMode) => {
  return {type: actionTypes.TYPE_SET_FILTER_MODE, filterMode};
};
const toggleWord = (_id, isMemorized) => {
  return (dispatch) => {
    Axios.put(url + _id, {isMemorized})
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.TYPE_FETCH_TOGGLE_WORD,
            _id: _id,
            word: response.data.word,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};
const removeWord = (_id) => {
  return (dispatch) => {
    Axios.delete(url + _id)
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: actionTypes.TYPE_FETCH_REMOVE_WORD,
            _id: _id,
          });
        }
      })
      .catch((error) => console.log(error));
  };
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
  fetchInsertWord,
  toggleForm,
  setFilterMode,
  toggleWord,
  removeWord,
  fetchAllWord,
};
