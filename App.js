//rnc : react native component
//imrc : import react , component

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screen/MainScreen';
import Box from './src/components/Box';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

const worddefault = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
];

function wordReducer(state = worddefault, action) {
  if (action.type === 'ADD_WORD') {
    return action.words;
  }
  return state;
}
function shouldShowFormReducer(state = false, action) {
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}
function filterModeReducer(state = 'Show_All', action) {
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}
// if (action.type === 'TOGGLE_WORD') {
//   const newWords = state.words.map((item) => {
//     if (item.id === action.id) {
//       return {...item, isMemorized: !item.isMemorized};
//     }
//     return item;
//   });
//   return {...state, words: newWords};
// }
// if (action.type === 'REMOVE_WORD') {
//   const newWords = state.words.filter((item) => {
//     if (item.id === action.id) {
//       return false;
//     }
//     return true;
//   });
//   return {...state, words: newWords};
// }
// if (action.type === 'TOGGLE_FORM') {
//   return {...state, shouldShowForm: !state.shouldShowForm};
// }
// if (action.type === 'ADD_WORD') {
//   return {...state, words: action.words};
// }
// if (action.type === 'SET_FILTER_MODE') {
//   return {...state, filterMode: action.filterMode};
// }
// return state;