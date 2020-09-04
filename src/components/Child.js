/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => this.inCrease()}
            style={{backgroundColor: 'green', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.decrease()}
            style={{backgroundColor: 'red', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>DeCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.reset()}
            style={{backgroundColor: 'yellow', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
