import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'redux/todoList/operations';

import { Form } from './AddTodoForm.styled';

export default function AddTodoForm({ closeModal }) {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: value,
      isCompleted: false,
    };
    dispatch(addTodo(data));
    setValue('');
    closeModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="todo-name"
        onChange={e => {
          setValue(e.target.value);
        }}
        type="text"
        label="todo-name"
        variant="outlined"
        value={value}
        fullWidth
        required
      />
      <Button color="success" variant="contained" size="large" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}
