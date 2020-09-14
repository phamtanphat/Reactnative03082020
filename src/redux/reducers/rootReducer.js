import {combineReducers} from 'redux';
import {wordReducer} from './wordReducer';
import {shouldShowFormReducer} from './shouldShowFormReducer';
import {filterModeReducer} from './filterModeReducer';

const rootReducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});

export default rootReducer;
