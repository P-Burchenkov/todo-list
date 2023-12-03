import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Checkbox,
  IconButton,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteTodo, updateTodo } from 'redux/todoList/operations';

import { CardContainer, CheckBoxContainer, Text } from './TodoCard.styled';

const label = { inputProps: { 'aria-label': 'isCompleted' } };

const TodoCard = forwardRef(({ id, name, isCompleted }, ref) => {
  const dispatch = useDispatch();

  const handleComplete = e => {
    const data = {
      id,
      name,
      isCompleted: e.target.checked,
    };

    dispatch(updateTodo(data));
  };

  const handleDelete = e => {
    const data = {
      id,
      name,
      isCompleted,
    };
    dispatch(deleteTodo(data));
  };

  return (
    <CardContainer ref={ref}>
      <Text isCompleted={isCompleted}>{name}</Text>
      <CheckBoxContainer>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                id={id}
                checked={isCompleted}
                onChange={handleComplete}
              />
            }
            label={isCompleted ? 'Completed' : 'Not Completed'}
          />
        </FormGroup>
        <IconButton aria-label="delete" id={id} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CheckBoxContainer>
    </CardContainer>
  );
});

export default TodoCard;
