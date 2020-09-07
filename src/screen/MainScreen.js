import React, {Component} from 'react';
import {View, StyleSheet, Alert, Keyboard} from 'react-native';
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
    textVn: '',
    textEn: '',
    filterMode: 'Show_All',
    arrayFilter: [
      {label: 'Show All', value: 'Show_All'},
      {label: 'Show Forgot', value: 'Show_Forgot'},
      {label: 'Show Memorized', value: 'Show_Memorized'},
    ],
  };
  toggleWord = (id) => {
    const newWords = this.state.words.map((item) => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  removeWord = (id) => {
    const newWords = this.state.words.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  addWord = () => {
    const {textEn, textVn, words} = this.state;
    if (!textEn || !textVn) {
      Alert.alert('Thong Bao', 'Ban chua nhap du thong tin', [
        {text: 'Da hieu', style: 'cancel'},
      ]);
    }
    const newWord = {
      id: words.length + 1,
      en: textEn,
      vn: textVn,
      isMemorized: false,
    };
    const newWords = Object.assign([], words);
    newWords.unshift(newWord);
    Keyboard.dismiss();
    this.textInputEn.clear();
    this.textInputVn.clear();
    this.setState({words: newWords});
  };

  render() {
    return (
      <View style={styles.container}>
        <Form shouldShowForm={this.state.shouldShowForm} />
        <Filter
          arrayFilter={this.state.arrayFilter}
          filterMode={this.state.filterMode}
          placeholder="Hãy lựa chọn hiển thị"
        />
        <Word words={this.state.words} filterMode={this.state.filterMode} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
