import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';

class Filter extends Component {
  state = {
    filterSelected: null,
  };
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          placeholder={this.props.placeholder}
          value={this.props.filterMode}
          onValueChange={(value) =>
            this.props.dispatch({type: 'SET_FILTER_MODE', filterMode: value})
          }
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});

const mapStateToProps = (state) => {
  return {filterMode: state.filterMode};
};
export default connect(mapStateToProps)(Filter);
