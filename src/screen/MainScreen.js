import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
        <Filter placeholder={{label: 'Lựa chọn hiển thị'}} />
        <Word />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
