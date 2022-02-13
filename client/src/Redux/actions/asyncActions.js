/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  addPackage, delPackFromShow, getPackages,
} from './Actions';

export const getAllPackages = () => async (dispatch) => { // get all packages
  const dataFromBack = await axios('/package');
  dispatch(getPackages(dataFromBack.data));
};
export const addOnePackage = (input) => async (dispatch) => { // add packages
  const dataFromBack = await axios.post('/package', input);
  dispatch(addPackage(dataFromBack.data));
};
export const getThisPack = (id) => async (dispatch) => { // get all packages
  const dataFromBack = await axios.delete(`/package/${id}`);
  if (dataFromBack.data === 'OK') {
    dispatch(delPackFromShow(id));
  }
};
