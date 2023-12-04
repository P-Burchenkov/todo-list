import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todoList/slice';

//  створення глобального стейту

export const store = configureStore({
  reducer: todoSlice.reducer,
});
