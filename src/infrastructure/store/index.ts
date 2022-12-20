import { IAuthState } from '@domain/auth';
import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { rootReducers } from './reducerSlices';

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// ########################################################################
export const initializeRequestReducer = <T>(state: IAuthState, action: PayloadAction<T>) => {
    state.isLoading = true;
};

export const errorRequestReducer = (state: IAuthState, action: PayloadAction<any>) => {
    const { type, payload } = action;

    state.isLoading = false;
    state.error = payload;
};
