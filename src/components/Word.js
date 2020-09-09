import React, {Component} from 'react';
import {FlatList} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';

class Word extends Component {
  render() {
    return (
      <FlatList
        data={this.props.words}
        extraData={this.props.words}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => <WordItem item={item} />}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {filterMode: state.filterMode, words: state.words};
};
export default connect(mapStateToProps)(Word);
