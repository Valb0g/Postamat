import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import productReducer from './productReducer';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  product: productReducer,
  input: inputReducer,
  show: showReducer,
});

export default rootReducer;
