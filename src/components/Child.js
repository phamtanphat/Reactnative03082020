/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  shouldComponentUpdate(nextProps, nextStates) {
    if (this.props.values === nextProps.values) {
      return false;
    }
    return true;
  }
  render() {
    console.log('Child');
    return (
      <View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => this.props.onInCrease()}
            style={{backgroundColor: 'green', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onDecrease()}
            style={{backgroundColor: 'red', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>DeCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onReset()}
            style={{backgroundColor: 'yellow', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Reset</Text>
          </TouchableOpacity>
          <Text>{this.props.values}</Text>
        </View>
      </View>
    );
  }
}
