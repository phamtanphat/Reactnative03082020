/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Child extends PureComponent {
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
            onPress={() => this.props.dispatch({type: 'INCREASE'})}
            style={{backgroundColor: 'green', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'DECREASE'})}
            style={{backgroundColor: 'red', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>DeCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'RESET', value: 0})}
            style={{backgroundColor: 'yellow', padding: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Reset</Text>
          </TouchableOpacity>
          <Text>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = function (store) {
  return {text: store.text};
};

export default connect(mapStateToProps)(Child);
