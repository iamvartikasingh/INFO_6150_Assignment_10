import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';
import jobsReducer from './slices/jobsSlice';
const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth reducer
    users: usersReducer,
    jobs: jobsReducer,
  },
});

export default store;