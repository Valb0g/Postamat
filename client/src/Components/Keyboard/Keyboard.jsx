/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
} from 'reactstrap';
import {
  clearInput, clearShow, showError, showPackage,
} from '../../Redux/actions/Actions';
import { getAllPackages } from '../../Redux/actions/asyncActions';
import OneButton from './OneButton';

function Keyboard() {
  const dispatch = useDispatch();
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const product = useSelector((state) => state.product);
  const input = useSelector((state) => state.input);

  const handleCheckPackage = () => {
    const foundPackage = (product.filter((el) => el.code == input));
    foundPackage.length
      ? dispatch(showPackage(foundPackage))
      : dispatch(showError('Вы ввели неправильный код посылки, пожалуйста введите код заново'));
  };
  const handleClear = () => {
    dispatch(clearInput(''));
    dispatch(clearShow([]));
    dispatch(getAllPackages());
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    >
      {
       board.map((el, index) => <OneButton key={index} value={el} />)
        }
      <Button style={{ padding: '1px', margin: '1px', width: '25%' }} type="button" onClick={handleCheckPackage} className="button"> OK </Button>
      <Button style={{ padding: '1px', margin: '1px', width: '24%' }} type="button" onClick={handleClear} className="button"> Clear </Button>
    </div>
  );
}

export default Keyboard;
