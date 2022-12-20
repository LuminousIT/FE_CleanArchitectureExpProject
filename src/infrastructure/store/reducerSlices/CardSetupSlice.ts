import { CardExtraInfoProp, GetListResponse } from '@domain/card-setup';
import { GET_CARD_TYPE } from '@domain/constants';
import { IGenericReducerState } from '@domain/generalSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cardTypeAction, createCardTypeAction } from '@store/actions/CardSetupActions';
import { errorRequestReducer, initializeRequestReducer } from '..';

type CardSetupProps = {
    cardType: Array<CardExtraInfoProp> | undefined | null;
    cardForm: CardExtraInfoProp[];
    cardSize: CardExtraInfoProp[];
};

const initialState: IGenericReducerState<CardSetupProps> = {
    cardType: [],
    cardForm: [],
    cardSize: [],
    isLoading: false,
    error: null,
};

const getCardTypeReducer = (
    state: IGenericReducerState<CardSetupProps>,
    action: PayloadAction<GetListResponse<CardExtraInfoProp> | undefined>,
) => {
    state.isLoading = false;
    state.cardType = action.payload?.data.all;
};

export const cardSetupSlice = createSlice({
    name: GET_CARD_TYPE,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(cardTypeAction.pending, initializeRequestReducer);
        builder.addCase(cardTypeAction.fulfilled, getCardTypeReducer);
        builder.addCase(cardTypeAction.rejected, errorRequestReducer);
    },
});

export default cardSetupSlice.reducer;
