import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { addOnePackage } from '../../Redux/actions/asyncActions';

function InputForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    img: '', title: '', description: '', code: null,
  });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addOnePackage(input));
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="url">Url</Label>
          <Input
            id="img"
            type="url"
            name="img"
            onChange={inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            onChange={inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">Description</Label>
          <Input
            id="description"
            type="textarea"
            name="description"
            onChange={inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">Code</Label>
          <Input
            id="code"
            type="text"
            name="code"
            onChange={inputHandler}
          />
        </FormGroup>
        <Button
          color="success"
          onClick={(e) => {
            submitHandler(e);
            navigate('/');
          }}
          type="button"
        >
          Ок

        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
