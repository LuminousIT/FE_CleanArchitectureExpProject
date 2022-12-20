import { _createCardTypeRequest, _getCardTypeRequest } from '@api/CardSetupRequest';
import { CardExtraInfoPayload } from '@domain/card-setup';
import { CREATE_CARD_TYPE, GET_CARD_TYPE } from '@domain/constants';
import { formatRequestPayload } from '@domain/utilities';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const cardTypeAction = createAsyncThunk(GET_CARD_TYPE, async (_, { rejectWithValue }) => {
    try {
        const response = await _getCardTypeRequest();

        if (response.success.status !== 200) {
            throw new Error(response.error.message);
        } else {
            return response.content;
        }
    } catch (error) {
        return rejectWithValue(error.message as string);
    }
});

export const createCardTypeAction = createAsyncThunk(
    CREATE_CARD_TYPE,
    async (payload: CardExtraInfoPayload, { dispatch, getState, rejectWithValue }) => {
        try {
            const response = await _createCardTypeRequest(formatRequestPayload(payload));

            if (response.success.status !== 200) {
                throw new Error(response.error.message);
            } else {
                dispatch(cardTypeAction());
                return response.content;
            }
        } catch (error) {
            return rejectWithValue(error.message as string);
        }
    },
);
