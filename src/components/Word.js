/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';
import actionCreatetor from '../redux/actions/actionCreatetor';

class Word extends Component {
  componentDidMount() {
    this.props.fetchAllWord();
  }
  renderFlatList = () => {
    if (this.props.words.length <= 0) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else {
      return (
        <FlatList
          data={this.props.words}
          extraData={this.props.words}
          keyExtractor={(item, index) => item._id.toString()}
          renderItem={({item}) => <WordItem item={item} />}
        />
      );
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {this.renderFlatList()}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {filterMode: state.filterMode, words: state.words};
};
export default connect(mapStateToProps, actionCreatetor)(Word);
