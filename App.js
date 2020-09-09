//rnc : react native component
//imrc : import react , component

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screen/MainScreen';
import Box from './src/components/Box';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = {count: 0, text: ''}, action) => {
  if (action.type === 'INCREASE') {
    return {...state, count: state.count + 1};
  }
  if (action.type === 'DECREASE') {
    return {...state, count: state.count - 1};
  }
  if (action.type === 'RESET') {
    return {...state, count: action.value};
  }
  return state;
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Box />
        </Provider>
      </SafeAreaView>
    );
  }
}
