import { RequestPayload, ResponsePayload } from './generalSchema';

export type CardExtraInfoPayload = {
    name: string;
};

export type CardExtraInfoProp = {
    id: number;
    name: string;
    dateCreated: string;
    dateUpdated: string;
};

type CreateExtraInfoResponse = {
    data: CardExtraInfoProp;
};

export type GetListResponse<T> = {
    data: {
        total: number;
        all: Array<T>;
    };
};

export interface ICardSetupRequest {
    getCardTypeRequest: () => Promise<ResponsePayload<GetListResponse<CardExtraInfoProp>>>;
    createCardTypeRequest: (
        payload: RequestPayload<{ name: string }>,
    ) => Promise<ResponsePayload<CreateExtraInfoResponse>>;
}
