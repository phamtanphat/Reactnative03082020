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
function shouldShowFormReducer(state = false, action) {
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  return state;
}
function filterModeReducer(state = 'Show_All', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
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

