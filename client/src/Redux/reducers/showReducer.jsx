/* eslint-disable no-undef */
/* eslint-disable default-param-last */

import defaultState from '../state/defaultState';
import {
  CLEAR_SHOW, DEL_PACK_FROM_SHOW, SHOW_ERROR, SHOW_PACKAGE,
} from '../types/Types';

const { show } = defaultState;
const showReducer = (state = show, action) => {
  switch (action.type) {
    case SHOW_PACKAGE:
      return action.payload;
    case SHOW_ERROR:
      return action.payload;
    case DEL_PACK_FROM_SHOW:
      return state.filter((pack) => pack.id !== action.payload);
    case CLEAR_SHOW:
      return action.payload;
    default:
      return state;
  }
};

export default showReducer;
