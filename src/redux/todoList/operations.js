import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6568bdfa9927836bd9755a86.mockapi.io/api/todo';

//  функція HTTP get запиту, що повертає список усіх todo

export const fetchAllTodo = createAsyncThunk(
  'fetchTodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todoList');
      return data;
    } catch (error) {
      toast.error('Ooops, something went wrong!!!');
      rejectWithValue(error);
    }
  }
);

//  функція HTTP post запиту, що додає нову todo

export const addTodo = createAsyncThunk(
  'addTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/todoList', todo);
      if (data) {
        toast.success(`"${todo.name}" was added successfully!`);
      }
      return data;
    } catch (error) {
      toast.error('Ooops, something went wrong!!!');
      rejectWithValue(error);
    }
  }
);

//  функція HTTP put запиту, що оновлює існуючу todo за її id

export const updateTodo = createAsyncThunk(
  'updateTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/todoList/${todo.id}`, todo);
      if (data) {
        toast.success(`"${todo.name}" was updated successfully!`);
      }
      return data;
    } catch (error) {
      toast.error('Ooops, something went wrong!!!');
      rejectWithValue(error);
    }
  }
);

//  функція HTTP delete запиту, що видаляє todo за її id

export const deleteTodo = createAsyncThunk(
  'deleteTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`todoList/${todo.id}`, todo);
      if (data) {
        toast.success(`"${todo.name}" was deleted successfully!`);
      }
      return data;
    } catch (error) {
      toast.error('Ooops, something went wrong!!!');
      rejectWithValue(error);
    }
  }
);
