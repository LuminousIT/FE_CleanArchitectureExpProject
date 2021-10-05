import { _loginRequest } from '@api/AuthenticationRequest';
import { LoginPayload, LoginResponse } from '@domain/auth';
import { LOGIN_USER } from '@domain/constants';
import { formatRequestPayload } from '@domain/utilities';
import { createAsyncThunk } from '@reduxjs/toolkit';

// createAsyncThunk<
// return type
// MyData
// type of arguement
// LoginPayload
// dispatch and other types
// {
// dispatch: AppDispatch
// state: RootState
// }
// >
export const loginUserAction = createAsyncThunk(
    LOGIN_USER,
    async (payload: LoginPayload, { dispatch, getState, rejectWithValue }) => {
        try {
            const response = await _loginRequest(formatRequestPayload(payload));
            console.log('api response data', response);
            if (response.success.status !== 200) {
                throw new Error(response.error.message);
            } else {
                if (response.content) setInStorage(response.content);
                return response.content;
            }
        } catch (error) {
            return rejectWithValue(error.message as string);
        }
    },
);

const setInStorage = (content: LoginResponse) => {
    const { token, data } = content;
    if (content) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userProfile', JSON.stringify(data));
    }
};

export const logoutUserAction = () => {
    sessionStorage.clear();
    window.location.href = '/';
};
