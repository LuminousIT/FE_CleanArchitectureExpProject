import { RequestPayload, ResponsePayload } from './generalSchema';

// REDUCER STATE
export interface IAuthState {
    isLoading: boolean;
    isAuthenticated?: boolean;
    error: null | string;
}

// API REQUEST
export type LoginPayload = {
    username: string;
    password: string;
};

export type UserProfileProps = {
    id: number;
    username: string;
    fullname: string;
    phone: string;
    email: string;
    address: string;
    priviledges: string;
    profilePicture: string;
    usertype: number;
    phoneVerified: number;
    emailVerified: number;
    dateCreated: string;
    dateUpdated: string;
};

export type LoginResponse = {
    data: UserProfileProps;
    token: string;
};

export interface ILoginRequest {
    loginRequest: (payload: RequestPayload<LoginPayload>) => Promise<ResponsePayload<LoginResponse>>;
}
