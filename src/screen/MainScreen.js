import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';

export default class MainScreen extends Component {
  onToggleWord = (id) => {
    const newWords = this.state.words.map((item) => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  onRemoveWord = (id) => {
    const newWords = this.state.words.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  onToggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  onAddWord = (words) => {
    this.setState({words});
  };
  onSetFilterMode = (filterMode) => {
    this.setState({filterMode});
  };
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
