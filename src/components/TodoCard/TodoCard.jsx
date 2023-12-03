import { CardContainer, Text } from './TodoCard.styled';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todoList/operations';

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
      <Text>{name}</Text>
      <div>
        <Checkbox
          {...label}
          id={id}
          checked={isCompleted}
          onChange={handleComplete}
        />
        <IconButton aria-label="delete" id={id} onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </CardContainer>
  );
});

export default TodoCard;
