import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6568bdfa9927836bd9755a86.mockapi.io/api/todo';

export const fetchAllTodo = createAsyncThunk(
  'fetchTodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todoList');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addTodo = createAsyncThunk(
  'addTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/todoList', todo);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'updateTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/todoList/${todo.id}`, todo);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'deleteTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`todoList/${todo.id}`, todo);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
