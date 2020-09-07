//rnc : react native component
//imrc : import react , component

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Form from './src/components/Form';
import MainScreen from './src/screen/MainScreen';
import Box from './src/components/Box';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <MainScreen />
      </SafeAreaView>
    );
  }
}
