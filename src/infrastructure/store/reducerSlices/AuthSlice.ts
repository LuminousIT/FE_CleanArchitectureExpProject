import { IAuthState, LoginResponse } from '@domain/auth';
import { LOGIN_USER } from '@domain/constants';
import { ResponsePayload } from '@domain/generalSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserAction } from '@store/actions/AuthenticationActions';

const initialState: IAuthState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

const initializeRequestReducer = <T>(state: IAuthState, action: PayloadAction<T>) => {
    state.isLoading = true;
};

const updateReducerAuth = (state: IAuthState, action: PayloadAction<LoginResponse | undefined>) => {
    const { type, payload } = action;
    state.isLoading = false;
    state.isAuthenticated = true;
};

const errorRequestReducer = (state: IAuthState, action: PayloadAction<any>) => {
    const { type, payload } = action;

    state.isLoading = false;
    state.error = payload;
};

export const authenticationSlice = createSlice({
    name: LOGIN_USER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserAction.pending, initializeRequestReducer);
        builder.addCase(loginUserAction.fulfilled, updateReducerAuth);
        builder.addCase(loginUserAction.rejected, errorRequestReducer);
    },
});

export default authenticationSlice.reducer;
