import { createAction } from '@reduxjs/toolkit';
import { quotesActions } from '../utils/constants';

export const getQuotesListSuccess = createAction(quotesActions.GET_QUOTE_INFO_SUCCESS);
export const setQuotesListError = createAction(quotesActions.SET_QUOTE_INFO_ERROR);