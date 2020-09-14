//rnc : react native component
//imrc : import react , component

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './src/screen/MainScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

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
