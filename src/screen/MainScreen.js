import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';
import axios from 'axios';

export default class MainScreen extends Component {
  componentDidMount() {
    const url = 'https://serverword03082020.herokuapp.com/word';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(),
    // })
    //   .then((response) => response.json())
    //   .then((word) => console.log(word))
    //   .catch((error) => console.log(error));
    axios
      .post(url, {
        en: 'Three',
        vn: 'Ba',
      })
      .then((word) => console.log(word.data))
      .catch((error) => console.log(error));
  }
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
