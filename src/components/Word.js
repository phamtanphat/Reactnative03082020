import React, {Component} from 'react';
import {FlatList} from 'react-native';
import WordItem from './WordItem';

export default class Word extends Component {
  render() {
    return (
      <FlatList
        data={this.props.words}
        extraData={this.props.words}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <WordItem item={item} filterMode={this.props.filterMode} />
        )}
      />
    );
  }
}
