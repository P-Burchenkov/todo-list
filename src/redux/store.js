import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todoList/slice';

export const store = configureStore({
  reducer: todoSlice.reducer,
});
