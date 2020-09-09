//rnc : react native component
//imrc : import react , component

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screen/MainScreen';
import Box from './src/components/Box';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
  words: [
    {id: 1, en: 'One', vn: 'Mot', isMemorized: false},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
    {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  ],
  shouldShowForm: false,
  filterMode: 'Show_All',
  arrayFilter: [
    {label: 'Show All', value: 'Show_All'},
    {label: 'Show Forgot', value: 'Show_Forgot'},
    {label: 'Show Memorized', value: 'Show_Memorized'},
  ],
};

const store = createStore((state = defaultState, action) => {
  return state;
});

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
