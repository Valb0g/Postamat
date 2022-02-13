import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

function Input() {
  const newNumber = useSelector((state) => state.input);
  return <div className="input">{newNumber}</div>;
}

export default Input;
