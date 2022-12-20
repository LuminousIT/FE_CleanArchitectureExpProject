import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import CardSetupSlice from './CardSetupSlice';

export const rootReducers = combineReducers({
    Auth: AuthSlice,
    CardSetup: CardSetupSlice,
});

export type RootState = ReturnType<typeof rootReducers>;
