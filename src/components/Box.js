/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  render() {
    console.log('Box');
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
          Count : {this.props.count}
        </Text>
        <Child />
      </View>
    );
  }
}

const mapStateToProps = function (store) {
  return {count: store.count};
};

export default connect(mapStateToProps)(Box);
