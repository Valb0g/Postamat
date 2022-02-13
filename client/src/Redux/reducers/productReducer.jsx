/* eslint-disable default-param-last */
import defaultState from '../state/defaultState';
import {
  ADD_PACKAGE, DEL_PACK_FROM_SHOW, GET_PACKAGES, SHOW_PACKAGE,
} from '../types/Types';

const { product } = defaultState;
const productReducer = (state = product, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return action.payload;
    case SHOW_PACKAGE:
      return action.payload;
    case ADD_PACKAGE:
      return [...state, action.payload];
    case DEL_PACK_FROM_SHOW:
      return state.filter((pack) => pack.id !== action.payload);

    default:
      return state;
  }
};

export default productReducer;
