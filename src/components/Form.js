import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';

export default class Form extends Component {
  state = {
    textEn: '',
    textVn: '',
  };
  addWord = () => {
    const {textEn, textVn} = this.state;
    const {words} = this.props;
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
    this.props.onAddWord(newWords);
  };
  renderForm = (shouldShowForm) => {
    if (shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              onChangeText={(text) => (this.state.textEn = text)}
              ref={(refs) => (this.textInputEn = refs)}
              placeholder="English"
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => (this.state.textVn = text)}
              ref={(refs) => (this.textInputVn = refs)}
              placeholder="Vietnamese"
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.props.onToggleForm}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.props.onToggleForm}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return this.renderForm(this.props.shouldShowForm);
  }
}

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
