import { createAction } from '@reduxjs/toolkit';
import { symbolActions } from '../utils/constants';

export const getSymbolListSuccess = createAction(symbolActions.GET_SYMBOL_LIST_SUCCESS);
export const setSymbolListError = createAction(symbolActions.SET_SYMBOL_LIST_ERROR);