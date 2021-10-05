import { LoginResponse, UserProfileProps } from './auth';

export const formatRequestPayload = <T>(payload: T): { data: T } => {
    return { data: { ...payload } };
};

export const getUserProfileInfo = (): UserProfileProps | null => {
    const userProfile = sessionStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile) : null;
};
