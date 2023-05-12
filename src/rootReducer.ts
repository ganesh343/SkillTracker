import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/auth/userSlice';

const rootReducer = combineReducers({
  user: userSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
