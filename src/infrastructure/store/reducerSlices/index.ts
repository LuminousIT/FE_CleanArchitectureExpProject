import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';

export const rootReducers = combineReducers({
    Auth: AuthSlice,
});

export type RootState = ReturnType<typeof rootReducers>;
