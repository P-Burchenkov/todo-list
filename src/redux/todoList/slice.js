import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchAllTodo, updateTodo } from './operations';

const initialState = {
  todoList: [],
  isLoading: false,
  error: null,
};

// todo слайс, що створює і повертає типи екшенів, генератори екшенів та редюсер

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todoList = action.payload;
    });
    builder.addCase(fetchAllTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllTodo.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todoList = [...state.todoList, action.payload];
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addTodo.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todoList = state.todoList.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return action.payload;
      });
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todoList = state.todoList.filter(item => {
        return item.id !== action.payload.id;
      });
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.pending, (state, _) => {
      state.isLoading = true;
    });
  },
});
