import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import dimensions from '../utils/dimensions';
import {connect} from 'react-redux';

class WordItem extends Component {
  renderItemWord = (item) => {
    const {filterMode} = this.props;
    if (filterMode === 'Show_Forgot' && !item.isMemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && item.isMemorized) {
      return null;
    } else {
      return (
        <View key={item.id} style={styles.wordgroup}>
          <View style={styles.textgroup}>
            <Text style={styles.textEn}>{item.en}</Text>
            <Text style={styles.textVn}>
              {item.isMemorized ? '----' : item.vn}
            </Text>
          </View>
          <View style={styles.textgroup}>
            <TouchableOpacity
              onPress={() =>
                this.props.dispatch({type: 'TOGGLE_WORD', id: item.id})
              }
              style={
                item.isMemorized
                  ? styles.buttonisForgot
                  : styles.buttonisMemorized
              }>
              <Text style={styles.textisMemorized}>
                {item.isMemorized ? 'Forgot' : 'isMemorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.dispatch({type: 'REMOVE_WORD', id: item.id})
              }
              style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  render() {
    return this.renderItemWord(this.props.item);
  }
}
const styles = StyleSheet.create({
  wordgroup: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    margin: 5,
  },
  textgroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  buttonisMemorized: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonisForgot: {
    padding: 10,
    backgroundColor: '#218838',
    borderRadius: 5,
  },
  buttonRemove: {
    padding: 10,
    backgroundColor: '#E0A800',
    borderRadius: 5,
  },
  textisMemorized: {
    fontSize: 20,
    color: 'white',
  },
  textRemove: {
    fontSize: 20,
    color: 'white',
  },
  textEn: {
    color: '#45B157',
    fontSize: dimensions.getWidth() / 15,
    fontWeight: '500',
  },
  textVn: {
    color: '#DA2846',
    fontSize: dimensions.getWidth() / 15,
    fontWeight: '500',
  },
});

const mapStateToProps = (state) => {
  return {filterMode: state.filterMode};
};
export default connect(mapStateToProps)(WordItem);
