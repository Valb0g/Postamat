/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { addNumber } from '../../Redux/actions/Actions';

function OneButton({ value }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(addNumber(e.target.innerText));
  };
  return <Button style={{ padding: '1px', margin: '1px', flex: '30%' }} type="button" onClick={handleClick}>{value}</Button>;
}

export default OneButton;
