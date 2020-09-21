import React, {Component} from 'react';
import {FlatList} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';
import actionCreatetor from '../redux/actions/actionCreatetor';

class Word extends Component {
  componentDidMount() {
    this.props.fetchAllWord();
  }
  render() {
    return (
      <FlatList
        data={this.props.words}
        extraData={this.props.words}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({item}) => <WordItem item={item} />}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {filterMode: state.filterMode, words: state.words};
};
export default connect(mapStateToProps, actionCreatetor)(Word);
