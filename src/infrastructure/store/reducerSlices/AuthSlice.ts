import { IAuthState, LoginResponse } from '@domain/auth';
import { LOGIN_USER } from '@domain/constants';
import { ResponsePayload } from '@domain/generalSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserAction } from '@store/actions/AuthenticationActions';
import { errorRequestReducer, initializeRequestReducer } from '..';

const initialState: IAuthState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

const updateReducerAuth = (state: IAuthState, action: PayloadAction<LoginResponse | undefined>) => {
    const { type, payload } = action;
    state.isLoading = false;
    state.isAuthenticated = true;
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
