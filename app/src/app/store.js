
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import loggerMiddleware from '../middleware/loggerMiddleware';


export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(loggerMiddleware)
});

