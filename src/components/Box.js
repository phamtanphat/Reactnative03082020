/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inCrease = () => {
    this.setState({count: this.state.count + 1});
  };
  decrease = () => {
    this.setState({count: this.state.count - 1});
  };
  reset = () => {
    this.setState({count: 0});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'red',
          }}>
          Count : {this.state.count}
        </Text>
        <Child />
      </View>
    );
  }
}
