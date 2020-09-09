import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';

export default class MainScreen extends Component {
  state = {
    words: [
      {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
      {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
      {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
      {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
    ],
    shouldShowForm: false,
    filterMode: 'Show_All',
    arrayFilter: [
      {label: 'Show All', value: 'Show_All'},
      {label: 'Show Forgot', value: 'Show_Forgot'},
      {label: 'Show Memorized', value: 'Show_Memorized'},
    ],
  };
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
        <Form
          onAddWord={this.onAddWord}
          words={this.state.words}
          onToggleForm={this.onToggleForm}
          shouldShowForm={this.state.shouldShowForm}
        />
        <Filter
          onSetFilterMode={this.onSetFilterMode}
          arrayFilter={this.state.arrayFilter}
          filterMode={this.state.filterMode}
          placeholder={{label: 'Lựa chọn hiển thị'}}
        />
        <Word
          onRemoveWord={this.onRemoveWord}
          onToggleWord={this.onToggleWord}
          words={this.state.words}
          filterMode={this.state.filterMode}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
