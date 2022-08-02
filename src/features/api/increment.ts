import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: Number) => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

      
      return response.data;
    }
);