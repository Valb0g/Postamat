/* eslint-disable default-param-last */
import defaultState from '../state/defaultState';
import { ADD_NUMBER, CLEAR_INPUT } from '../types/Types';

const { input } = defaultState;
const inputReducer = (state = input, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return (state + action.payload);
    case CLEAR_INPUT:
      return action.payload;
    default:
      return state;
  }
};

export default inputReducer;
