import { ToastOptions } from '@chakra-ui/react';

export type RequestPayload<T> = {
    data: T;
};

type ResponseStatus = {
    message: string;
    status: number;
    code: number;
};
export type ResponsePayload<T = null> = {
    success: ResponseStatus;
    error: ResponseStatus;
    content?: T;
};

export type IGenericReducerState<T = undefined> = {
    isLoading: boolean;
    error: null | string;
} & (T extends undefined ? {} : T);
