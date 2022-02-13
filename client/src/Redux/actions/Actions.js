/* eslint-disable max-len */
import {
  ADD_NUMBER, ADD_PACKAGE, ADD_PRODUCT, CHECK_PRODUCT, CLEAR_INPUT, CLEAR_SHOW, DEL_PACK_FROM_SHOW, DEL_PRODUCT, GET_PACKAGES, SHOW_ERROR, SHOW_PACKAGE,
} from '../types/Types';

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const delProduct = (payload) => ({
  type: DEL_PRODUCT,
  payload,
});
export const addNumber = (payload) => ({
  type: ADD_NUMBER,
  payload,
});
export const checkProduct = (payload) => ({
  type: CHECK_PRODUCT,
  payload,
});
export const getPackages = (payload) => ({
  type: GET_PACKAGES,
  payload,
});
export const showPackage = (payload) => ({
  type: SHOW_PACKAGE,
  payload,
});
export const delPackFromShow = (payload) => ({
  type: DEL_PACK_FROM_SHOW,
  payload,
});
export const addPackage = (payload) => ({
  type: ADD_PACKAGE,
  payload,
});
export const clearInput = (payload) => ({
  type: CLEAR_INPUT,
  payload,
});
export const clearShow = (payload) => ({
  type: CLEAR_SHOW,
  payload,
});
export const showError = (payload) => ({
  type: SHOW_ERROR,
  payload,
});
