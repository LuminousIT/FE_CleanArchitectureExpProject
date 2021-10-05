import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
